
import { memo, useEffect, useMemo, useState } from 'react';
import { useStyles } from './searchJobComp.styles';
import SearchSection from '../searchSection';
import JobSection from '../jobSection';
import HocComponent from '../hocComponent';

//Api link
const apiLink = 'https://api.weekday.technology/adhoc/getSampleJdJSON';

/**
 * To render Search Jobs Cards
 * @param {any} data
 * @param {boolean} isLoading
 * @returns {JSX Element}
 */
const SearchJob = ({ data, isLoading }: ISearchJob) => {
  const style = useStyles();
  const [jobData, setJobData] = useState([]); //To handle data of jobs

  useEffect(() => {
    const allData: any = [...jobData, ...data];
    data?.length && setJobData(allData);
  }, [data]);

  const sectionToRender = useMemo(() => {
    return jobData?.map((item: any) => {
      return <JobSection jobData={item}/>;
    });
  }, [jobData]);

  return (
    <div>
      <SearchSection />
      <div css={style.data}>{sectionToRender}</div>
      {isLoading && <div css={style.loading}>Loading...</div>}
    </div>
  );
};

//Implementation of Higher Order Component
const SearchJobComp = HocComponent('Search Job Section', SearchJob, apiLink);

export default memo(SearchJobComp);

interface ISearchJob{
  data:any;
  isLoading:boolean;
}