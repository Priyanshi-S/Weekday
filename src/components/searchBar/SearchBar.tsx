import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useStyles } from './searchBar.styles';
import { ImCross } from 'react-icons/im';

export const SearchBar = () => {
  const [input, setInput] = useState('');
  const style = useStyles();
  const [result, setResult] = useState<any>('');
  const fetchData = (value: string) => {
    setResult(value);
  };

  //Applied debouncing
  const debounce = (func: any, time: number) => {
    let timer: any;
    return function () {
      const args = arguments;
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => func.apply(args), time);
    };
  };

  //To handle change in textboxs
  const handleChange = (value: string) => {
    setInput(value);
    const debFun = debounce(function () {
      fetchData(value);
    }, 1000);
    debFun();
  };

//On clear 
  const onClear = () => {
    setInput('');
    setResult('');
  };

  //To open in next page(google.com)
  const onResultClick = (value: string) => {
    window.open('//' + 'google.com/search?q=' + value, '_blank');
  };

  return (
    <div css={style.searchBarWrapper}>
      <div css={style.inputWrapper}>
        <input
          placeholder="Type to search..."
          value={input}
          onChange={(e) => handleChange(e.target.value)}
          css={style.input}
        />
        {input ? (
          <div onClick={onClear}>
            <ImCross />
          </div>
        ) : (
          <div>
            <FaSearch/>
          </div>
        )}
      </div>
      {result && (
        <div
          css={style.resultsList}
          onClick={() => {
            onResultClick(result);
          }}
        >
          {result}
        </div>
      )}
    </div>
  );
};
