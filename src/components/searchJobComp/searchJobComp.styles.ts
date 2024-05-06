import { useMemo } from 'react';

export const useStyles = () => {
  return useMemo(() => {
    return {
      wrapper: { borderTop: '2px solid gray', padding: '10px' },
      data: {
        display: 'flex',
        flexWrap: 'wrap',
        flex: '50%',
        justifyContent: 'space-between',
        margin: 30,
      },
      loading:{ height: '100%' }
    } as const;
  }, []);
};
