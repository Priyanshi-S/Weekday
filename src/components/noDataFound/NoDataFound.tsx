import { useStyles } from './noDataFound.styles';
import { BiSearchAlt } from "react-icons/bi";

  /**
   * Component to render for no data found
   * @param {INoDataFound} props
   * @param {React.ReactNode} props.titleText
   * @param {React.ReactNode} props.descriptionText
   * @returns {JSX.Element}
   */
 export const NoDataFound = ({
    descriptionText,
    titleText,
  }: INoDataFound) => {
    const styles = useStyles();
  
    return (
      <div css={styles.ndContainer}>
        <div>
          {<BiSearchAlt size='100'/>}
        </div>
        <div css={styles.ndTextWrapper}>
        {titleText}
       
          {descriptionText && (
         descriptionText
          )}
          </div>
     
      </div>
    );
  }; 

  interface INoDataFound{
    titleText?: React.ReactNode;
    descriptionText?: React.ReactNode;
  }
 
  NoDataFound.defaultProps = {
    titleText: 'No Data Found',
    description:'No Jobs'
  };