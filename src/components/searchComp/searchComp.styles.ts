import { useMemo } from 'react';

export const useStyles = () => {
  return useMemo(() => {
    return {
      searchBarWrapper: {
        width: '100%',
      },
    } as const;
  }, []);
};
