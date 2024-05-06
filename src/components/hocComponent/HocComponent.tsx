import { useEffect, useState } from 'react';

const LIMIT= 9;
/*
 * Higher order component can be reused for fetching data
 */
const HocComponent = (title: string, Component: any, request: string) => {
  return function HOC() {

    const [data, setData] = useState([]); //State to manage data
    const [isLoading, setIsLoading] = useState(false); //State to manage loading text
    const [page, setPage] = useState(1); //State to manage number of ppages

    //For fetching data for first time
    useEffect(() => {
      fetchData();
    }, []);

    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    const body = JSON.stringify({
      limit: LIMIT,
      offset: page,
    });

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body,
    };

    //To fetch data
    const fetchData = async () => {
      setIsLoading(true);
      fetch(request, requestOptions)
        .then((response) => response.json())
        .then((result) => setData(result?.jdList))
        .then(() => setPage((prevPage) => prevPage + 1))
        .then(() => setIsLoading(false))
        .catch((error) => console.error(error));
    };

    //To check if it is end of page and need of api call
    const handleScroll = () => {
      if (isLoading) {
        return;
      } else if (
        window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight
      ) {
        return;
      }
      fetchData();
    };

    //UseEffect to manage scrolling on page
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, [isLoading]);

    return (
      <div>
        <Component data={data} isLoading={isLoading} />
      </div>
    );
  };
};
export default HocComponent;
