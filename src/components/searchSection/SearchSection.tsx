import { memo, useState } from 'react';
import { useStyles } from './searchSection.styles';
import { SearchData, searchData } from './searchData';
import SearchComp from '../searchComp';

/**
 * To render Search section component
 * @returns {JSX Element}
 */
const SearchSection = () => {
  const style = useStyles();

  const search = (Object.keys(searchData) as Array<keyof SearchDataKeys>).map((key:keyof SearchDataKeys, idx:number) => {
    return (
      <div css={style.wrapper} key={idx}>
        <SearchComp
          name={searchData[key]?.name}
          options={searchData[key]?.options}
          isMulti={searchData[key]?.isMulti}
        />
      </div>
    );
  });
  return (
    <div css={style.searchSection}>
      {search}
    </div>
  );
};
export default memo(SearchSection);

interface SearchDataKeys {
  role: keyof SearchData;
  companyName: keyof SearchData;
  location: keyof SearchData;
  remote: keyof SearchData;
  techStack: keyof SearchData;
  minExperience: keyof SearchData;
  minBasePay: keyof SearchData;
}
