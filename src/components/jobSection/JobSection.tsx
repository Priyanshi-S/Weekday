import { memo } from 'react';
import { useStyles } from './jobSection.styles';
import { FaBoltLightning } from 'react-icons/fa6';
import { FaRegUserCircle } from 'react-icons/fa';
import { TiTick } from 'react-icons/ti';
import Button from '../button';

/**
 * To Job card section component
 * @param {IJobData} jobData
 * @returns {JSX Element}
 */
const JobSection = ({ jobData }: IJobData) => {
  const style = useStyles();

  //Object Destructuring
  const {logoUrl, companyName,jobRole,location,
    salaryCurrencyCode,minJdSalary,maxJdSalary,
    jobDetailsFromCompany,minExp}= jobData;
 
  return (
    <div css={style.items}>
      <div css={style.postedTitle}>Posted Few Days Ago</div>
      <div css={style.jobHeaderSection}>
        <div>
          {logoUrl &&
          <img
            src={logoUrl}
            style={style.logo}
          />}
        </div>
        <div css={style.headerText}>
          <div
            css={style.companyName}
          >
            {companyName}
          </div>
          <div css={style.jobRole}>
            {jobRole}
          </div>
          <div
            css={style.location}
          >
            {location}
          </div>
        </div>
      </div>
      <div css={style.estimatedSalary}>
        Estimated Salary: {salaryCurrencyCode} {minJdSalary}
        {minJdSalary && maxJdSalary ? '-' : ''}
        {maxJdSalary} LPA <TiTick size="20" />
      </div>
      <div
        css={style.jobDetailsSection}
      >
        <div css={style.about}>About Company:</div>
        <div
          css={style.jobDetails}
        >
          {jobDetailsFromCompany}
        </div>
      </div>
      <Button
        customStyles={style.viewJob}
        variant="link"
      >
        View job
      </Button>
      <div css={style.minExpSection}>
        {minExp && (
          <>
            <div
              css={style.minExp}
            >
              Minimum Experience
            </div>
            <div
              css={style.expText}
            >
              {minExp} years
            </div>
          </>
        )}
      </div>

      <Button
        customStyles={style.button}
        variant="primary"
      >
        <FaBoltLightning />
        Easy Apply
      </Button>
      <Button variant="secondary" customStyles={{ fontWeight: 14 }}>
        <div css={style.icon}>
          <FaRegUserCircle />
        </div>
        Unlock referral asks
      </Button>
    </div>
  );
};
interface IJobData {
  jobData: IJob;
}

interface IJob{
  logoUrl: string;
   companyName: string;
   jobRole:string;
   location:string;
   salaryCurrencyCode:string;
   minJdSalary:string;
   maxJdSalary:string;
   jobDetailsFromCompany:string;
   minExp:string;
}

export default memo(JobSection);
