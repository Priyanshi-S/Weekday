import { useMemo } from 'react';

export const useStyles = () => {
  return useMemo(() => {
    return {
      inputWrapper: {
        borderRadius: 4,
        paddingRight: 8,
        boxShadow: '0px 0px 8px #ddd',
        backgroundColor: 'hsl(0, 0%, 100%)',
        display: 'flex',
        alignItems: 'center',
        border: '1px solid hsl(0, 0%, 80%)',
        minHeight: 36,
      },
      input: {
        backgroundColor: 'transparent',
        height: '100%',
        width: '100%',
        marginLeft: 5,
        '&:focus-visible': {
          outline: 'none',
        },
        border: 'none',
        fontSize:16
      },
      resultsList: {
        backgroundColor: 'white',
        boxShadow: ' 0px 0px 8px #ddd',
        borderRadius: '0px 0px 10px 10px',
        maxHeight: 300,
        marginTop: -2,
        padding: 10,
        cursor:'pointer'
      },
    } as const;
  }, []);
};
