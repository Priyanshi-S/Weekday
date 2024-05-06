import { useMemo } from 'react';

export const useStyles = () => {
  return useMemo(
    () =>
      ({
        ndContainer: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '50vh',
          width: '100%',
          marginTop:40
        },
        ndTextWrapper: {
          display: 'contents',
        },
        ndText: {
          padding: 4,
          textAlign: 'center',
        },
      } as const),
    []
  );
};