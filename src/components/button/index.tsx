import classNames from 'classnames';

import './styles.scss';

interface ButtonProps extends React.PropsWithChildren {
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'text' | 'outline';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  type = 'button',
  children,
}) => {
  const buttonClasses = classNames('button', `button--${variant}`, `button--${size}`, {
    'button--full-width': fullWidth,
  });

  return (
    <button className={buttonClasses} onClick={onClick} type={type}>
      {children}
    </button>
  );
};
