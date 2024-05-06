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
      loading:{ 
        height: '100%', 
        textAlign:'center',
        fontWeight: 500,
        fontSize: 16,
        marginBottom: 40
    }
    } as const;
  }, []);
};
