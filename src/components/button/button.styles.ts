import { useMemo } from 'react';

/**
 * Button component styles
 * @param {boolean} loading used to handle the loading state of the button
 * @returns {object}
 */
export function useStyles({ size, fullWidth, state }: IButtonStyles) {

  return useMemo(() => {
    let buttonHeight = 0;
    switch (size) {
      case 'xs':
        buttonHeight = 24;
        break;
      case 'sm':
        buttonHeight = 36;
        break;
      case 'md':
        buttonHeight = 48;
        break;
      default: // lg
        buttonHeight = 56;
    }

    let btnColors = null;
    switch (state) {
      case 'success':
        btnColors = {
          dark: '#43A047',
          light: '#ECF5EC',
        };
        break;
      case 'alert':
        btnColors = {
          dark: '#FFC229',
          light: '#FFF9E9',
        };
        break;
      case 'warning':
        btnColors = {
          dark: '#F75426',
          light: '#FFEDE9',
        };
        break;
      default: // standard
        btnColors = {
          dark: '#1a73e8',
          light: 'rgb(85, 239, 196)',
        };
    }

    return {
      btn: {
        fontSize: 16,
        fontWeight: 500,
        borderRadius: 8,
        border: 0,
        cursor: 'pointer',
        background: btnColors.dark,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: btnColors.light,
        textAlign: 'center',
        minWidth: 72,
        minHeight: buttonHeight,
        position: 'relative',
        textTransform: 'capitalize',
        '&:disabled': {
          cursor: 'not-allowed',
        },
      },
      // large button
      lg: {
        padding: '16px',
        fontSize: 16,
      },
      // medium button
      md: {
        padding: '12px 16px',
        fontSize: 16,
      },
      // small button
      sm: {
        padding: '8px 16px',
        fontSize: 14,
      },
      normal: {
        borderRadius: 0,
      },
      // with border radius
      rounded: {
        borderRadius: 8,
      },
      xs: {
        padding: '6px 8px',
        fontSize: 12,
        borderRadius: 16,
      },
      flex: {},
      fullWidth: {
        width: '100%',
      },
      inlineFlex: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      // primary button
      primary: {
        '&:disabled': {
          backgroundColor: '#D8DCE6',
          color: '#828894',
          pointerEvents: 'none',
        },
        backgroundColor: 'rgb(85, 239, 196)',
        fontWeight: 500,
        color: 'black',
      },
      // outline button
      secondary: {
        background: 'transparent',
        border: `1px solid ${btnColors.dark}`,
        backgroundColor: 'rgb(73, 67, 218)',
        color: '#fff',
        '&:disabled': {
          background: 'transparent',
          borderColor: '#D8DCE6',
          color: '#828894',
        },
      },
      // text button
      link: {
        background: 'none',
        color: btnColors.dark,
        minWidth: 0,
        '&:disabled': {
          background: 'none',
          boxShadow: 'none',
          color: '#828894',
        },
      },
      startIcon: {
        marginRight: size === 'xs' ? '5px' : '10px',
      },
      endIcon: {
        marginLeft: size === 'xs' ? '5px' : '10px',
      },
      //  with box shadow
      hasShadow: {
        boxShadow:
          '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)',
      },
      noShadow: {
        boxShadow: 'none',
      },
      // disabled state
      disabled: {
        cursor: 'not-allowed',
        backgroundColor: '#D8DCE6',
        color: '#828894',
      },
      skeletonStyles: {
        width: fullWidth ? '100%' : 150,
        height: buttonHeight,
      },
    } as const;
  }, [
    fullWidth,
    size,
    state,
  ]);
}

export type Size = 'lg' | 'md' | 'sm' | 'xs';
export type ButtonStates = 'standard' | 'success' | 'alert' | 'warning';
interface IButtonStyles {
  size: Size | undefined;
  fullWidth: boolean | undefined;
  state: ButtonStates | undefined;
}
