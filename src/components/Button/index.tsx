import React from 'react';
import { createClassName } from '../helpers';
import styles from './Button.module.css';

const classNames = createClassName(styles);

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'transparent';
  size?: 'small';
  rounded?: boolean;
  children?: React.ReactNode;
  className?: string;
  full?: boolean;
  loading?: boolean;
}

interface AnchorProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'transparent';
  size?: 'small';
  rounded?: boolean;
  children?: React.ReactNode;
  className?: string;
  full?: boolean;
  loading?: boolean;
  disabled?: boolean;
}

function Button(props: ButtonProps) {
  const { children, variant, full, rounded, className, loading, size, ...rest } = props;
  const classnames = classNames({
    [`${className}`]: !!className,
    [`${variant}`]: variant,
    [`${size}`]: size,
    fullWidth: full,
    loading: loading,
    rounded: rounded,
  });

  function onClick(e: any) {
    if (rest.onClick) rest.onClick(e);
    return;
  }

  return (
    <button type={rest.type || 'button'} onClick={onClick} className={`${classnames}`} {...rest}>
      {children}
    </button>
  );
}

export function Anchor(props: AnchorProps) {
  const { children, variant, full, rounded, className, loading, disabled, size, ...rest } = props;
  const classnames = classNames({
    [`${className}`]: !!className,
    [`${styles.anchorStyle}`]: true,
    [`${variant}`]: variant,
    [`${size}`]: size,
    fullWidth: full,
    loading: loading,
    rounded: rounded,
    disabled: disabled,
  });

  return (
    <a className={`${classnames}`} {...rest}>
      {children}
    </a>
  );
}

export default Button;
