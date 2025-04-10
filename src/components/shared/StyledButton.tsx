import { HTMLAttributes, ReactNode } from 'react';
import { Button } from '../ui/button';
import styles from './_shared.module.css';

type Props = {
  variant: 'primary' | 'secondary';
  className?: string;
  children: ReactNode | string;
} & HTMLAttributes<HTMLElement | HTMLLinkElement>;

const StyledButton = ({ variant, className = '', children, ...rest }: Props) => {
  const key = 'button_' + variant;
  return (
    <Button {...rest} className={`${styles[key]} ${className}`}>
      {typeof children == 'string' ? <span>{children}</span> : children}
    </Button>
  );
};

export default StyledButton;
