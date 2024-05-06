import { useStyles } from './searchComp.styles';
import Select from 'react-select';

/**
 * To Search Select dropdown component
 * @param {IObject[]} options
 * @param {boolean} isMulti
 * @param {string} name
 * @returns {JSX Element}
 */
export const SearchComp = ({ options, isMulti, name }: ISelectComp) => {
  const style = useStyles();

  return (
    <div css={style.searchBarWrapper}>
      <Select
        isMulti={isMulti}
        name={name}
        options={options}
        placeholder={name}
      />
    </div>
  );
};

interface ISelectComp {
  options: IObject[];
  isMulti: boolean;
  name: string;
}

interface IObject {
  [key: string]: string;
}
