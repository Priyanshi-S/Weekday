import { useMemo } from 'react';

export const useStyles = () => {
  return useMemo(() => {
    return {
      wrapper: { marginRight: 10, marginBottom: 10 },
      searchSection:{ display: 'flex', flexWrap: 'wrap', marginLeft: 50 }
     
    } as const;
  }, []);
};
