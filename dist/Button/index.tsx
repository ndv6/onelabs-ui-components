import React from 'react';
import { useHistory } from 'react-router-dom';
import { createClassName } from '../helpers';
import styles from './Button.module.css';

const classNames = createClassName(styles);

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'transparent';
  size?: 'small';
  rounded?: boolean;
  children?: React.ReactNode;
  className?: string;
  full?: boolean;
  href?: string;
  loading?: boolean;
}

function Button(props: Props) {
  const { children, variant, full, rounded, className, href, loading, size, ...rest } = props;
  const history = useHistory();
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
    if (href) history.push(href);
    return;
  }

  return (
    <button type={rest.type || 'button'} onClick={onClick} className={classnames} {...rest}>
      {children}
    </button>
  );
}

export default Button;
