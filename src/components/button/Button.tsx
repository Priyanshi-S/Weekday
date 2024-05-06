import { useStyles, Size, ButtonStates } from './button.styles';
import { ReactNode } from 'react';

/**
 * Component to render the Button
 * @param { Variant } props.variant (optional)
 * @param { ReactNode } props.customLoader (optional)
 * @param { boolean } props.disableShadow (optional)
 * @param { ButtonTypes } props.type
 * @param { ReactNode } props.icon (optional)
 * @param { IconPlacement } props.iconPlacement (optional)
 * @param { Display } props.display (optional)
 * @param { ICustomStyles } props.customStyles (optional)
 * @param { Size } props.size (optional)
 * @param { Shape } props.shape (optional)
 * @param { boolean } props.fullWidth (optional)
 * @param { boolean } props.disabled (optional)
 * @param { Function } props.onClick (optional)
 * @param { ReactNode } props.children
 * @param { string } props.testId
 * @param { ButtonStates } props.state (optional)
 * @returns JSX Element
 */
const Button = ({
  testId,
  disableShadow,
  size,
  variant,
  customLoader,
  onClick,
  type,
  children,
  disabled,
  display,
  icon,
  iconPlacement,
  shape,
  customStyles,
  state,
  fullWidth,
  ariaLabel,
  ...rest
}: IButtonV2) => {
  const styles = useStyles({ size, fullWidth, state });

  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      data-testid={testId}
      css={[
        styles.btn,
        styles[`${shape!}`],
        styles[`${display!}`],
        styles[`${variant!}`],
        styles[`${size!}`],
        styles[`${fullWidth ? 'fullWidth' : 'flex'}`],
        styles[`${disableShadow ? 'noShadow' : 'hasShadow'}`],
        disabled && styles.disabled,
        customStyles,
      ]}
      aria-label={ariaLabel}
      {...rest}
    >
      <>
        {icon && iconPlacement === 'left' && (
          <span css={styles.startIcon}>{icon}</span>
        )}
        {children}
        {icon && iconPlacement === 'right' && (
          <span css={styles.endIcon}>{icon}</span>
        )}
      </>
    </button>
  );
};

type ButtonTypes = 'submit' | 'button' | 'reset';
export type Shape = 'normal' | 'rounded';
type Variant = 'primary' | 'secondary' | 'link';
type IconPlacement = 'left' | 'right';
type Display = 'flex' | 'inlineFlex';

interface IButtonV2 {
  variant?: Variant;
  customLoader?: ReactNode;
  disableShadow?: boolean;
  type: ButtonTypes;
  icon?: React.ReactNode;
  iconPlacement?: IconPlacement;
  display?: Display;
  customStyles?: any;
  size?: Size;
  shape?: Shape;
  fullWidth?: boolean;
  disabled?: boolean;
  onClick?: (event?: any) => void;
  children: ReactNode;
  testId: string;
  state?: ButtonStates;
  ariaLabel?: string;
}

Button.defaultProps = {
  loading: false,
  showSkeleton: false,
  disabled: false,
  type: 'button',
  variant: 'primary',
  disableShadow: true,
  onClick: () => {},
  display: 'flex',
  shape: 'rounded',
  fullWidth: false,
  size: 'sm',
  testId: 'button-test-id',
  state: 'standard',
};

export default Button;
