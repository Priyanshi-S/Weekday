
import { memo } from 'react';
import { useStyles } from './header.styles';

/**
 * To render Header component
 * @returns {JSX Element}
 */
const Header = () => {
  const style = useStyles();
  return (
      <div css={style.header}>Hi Priyanshi</div>
  );
};

export default memo(Header);
