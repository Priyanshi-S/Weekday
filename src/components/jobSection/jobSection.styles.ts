
import { useMemo } from 'react';
import { useBreakpoints } from '../../hooks/useBreakPoints';

export const useStyles = () => {
  const { isMobile } = useBreakpoints();
  return useMemo(() => {
    return {
      items: {
        display: 'flex',
        width: isMobile ? '100%' : 'calc(28% - 12px)',
        marginBottom: 16,
        borderRadius: 20,
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0px 4px 10px rgba(35, 0, 73, 0.3)',
        zIndex: '-1',
        flexDirection: 'column',
        maxWidth: 360,
        backgroundColor: 'rgb(255, 255, 255)',
        transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        height: '100%!important',
        padding: 20,
      },
      postedTitle: {
        marginBottom: 10,
        padding: 4,
        boxShadow: '0px 4px 10px rgba(35, 0, 73, 0.3)',
        background: '#fcfcfc',
        fontSize: 8,
        color: 'rgba(0, 0, 0, 0.87)',
        fontWeight: 400,
        width: 100,
        borderRadius: 10,
      },
      jobHeaderSection:{ display: 'flex' },
      logo:{ width: 25, height: '2.5rem', margin: '0 10px' },
      headerText:{ flexDirection: 'column' },
      companyName:{
        fontSize: 13,
        fontWeight: 600,
        marginBottom: 3,
        color: '#8b8b8b',
      },
      jobRole:{ fontSize: 14, fontWeight: 400, textTransform: 'capitalize' },
      location:{
        fontSize: 11,
        fontWeight: 500,
        marginTop: 5,
        textTransform: 'capitalize',
      },
      estimatedSalary: {
        color: 'rgb(77, 89, 106)',
        fontSize: 14,
        fontWeight: 400,
        display: 'flex',
      },
      jobDetailsSection:{
        height: 250,
        overflow: 'hidden',
        '-webkit-mask-image':
          'linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255), rgba(255, 255, 255, 0))',
      },
      about:{ fontSize: '1rem', fontWeight: 500 },
      jobDetails:{
        fontSize: 14,
        fontWeight: 400,
        color: 'rgba(0, 0, 0, 0.87)',
      },
      viewJob:{
        top: -12,
        color: 'rgb(73, 67, 218)',
        fontWeight: 14,
      },
      minExpSection:{ minHeight: 50 },
      minExp:{
        fontSize: 13,
        fontWeight: 600,
        marginBottom: 3,
        color: '#8b8b8b',
      },
      expText:{
        color: 'rgba(0, 0, 0, 0.87)',
        fontSize: 14,
        paddingBottom: 8,
      },
      button:{ marginBottom: 8, fontSize: 16 },
      icon:{ paddingRight: 4 }
    } as const;
  }, [isMobile]);
};
