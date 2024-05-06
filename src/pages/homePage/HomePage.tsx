
import Header from '@components/header';
import SearchJobComp from '../../components/searchJobComp';
import { useStyles } from './homePage.styles';

/**
 * Application home page
 * @returns {JSX.Element}
 */
const WeekdayHomePage = (): JSX.Element => {
  const style = useStyles();
  return (
    <div css={style.sectionWrapper}>
      <div css={style.leftSection}/>
      <div>
        <div css={style.header}>
          <Header />
        </div>
        <div css={style.body}>
          <SearchJobComp />
        </div>
      </div>
      <div css={style.rightSection}/>
    </div>
  );
};

export default WeekdayHomePage;
