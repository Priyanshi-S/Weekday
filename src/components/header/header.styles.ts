import { useMemo } from 'react';

export const useStyles = () => {
  return useMemo(() => {
    return {
      header: {
        width: '100%',
        backgroundColor: 'rgb(255, 255, 255)',
        padding: '10px 30px',
        height: 60,
        boxShadow: '0px 4px 10px rgba(35, 0, 73, 0.3)',
        fontSize: 16,
        fontWeight: 500,
      },
    } as const;
  }, []);
};
