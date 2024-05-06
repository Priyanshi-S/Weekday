import { useMemo } from 'react';

export const useStyles = () => {
  return useMemo(() => {
    return {
      wrapper: { background: 'rgb(213, 212, 208)' },
      sectionWrapper:{ display: 'flex' },
      leftSection: {
          background: 'rgb(255, 255, 255)',
          width: 150,
          padding: '20px 15px',
          borderRadius: 12,
          borderRight: '1px solid rgba(0, 0, 0, 0.1)',
          marginRight: 10,
          zIndex: 20,    
      },
      rightSection:{
        background: 'rgb(187, 252, 234)',
        width: 150,
        padding: '20px 15px',
        borderRadius: 12,
        borderLeft: '1px solid rgba(0, 0, 0, 0.1)',
        marginLeft: 10,
        zIndex: 20,
      },
      header: {
        display: 'flex',
        width: '100%',
        position: 'fixed',
        top: 0,
        alignItems: 'center',
        justifyContent: 'center',
        'z-index': 10,
        transitionDuration: '0.5s',
        marginLeft: -16,
      },
      body: { marginTop: 108 },
    } as const;
  }, []);
};
