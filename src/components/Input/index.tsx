import React, { ReactNode } from 'react';
import Button from '../Button';
import { createClassName } from '../helpers';
import { ReactComponent as EyeSvg } from './eye.svg';
import styles from './Input.module.css';

const classNames = createClassName(styles);

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string | ReactNode;
  error?: string | ReactNode | undefined;
  className?: string;
  loading?: boolean;
  required?: boolean;
  icon?: any;
}

function Input(props: Props) {
  const { children, label, className, loading, error, type, icon, required, ...rest } = props;
  const [htmlType, setHtmlType] = React.useState('');
  const classnames = classNames({
    [`${className}`]: !!className,
    error: error,
    disabled: props.disabled,
  });
  return (
    <div className={classnames}>
      {label && (
        <label className={styles.label}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </label>
      )}
      <div className={styles.wrapper}>
        <input type={htmlType || type} {...rest} />
        {loading && <div className={styles.loading} />}
        {icon}
        {type === 'password' && (
          <Button onClick={() => setHtmlType(prev => (prev === 'text' ? 'password' : 'text'))}>
            <EyeSvg />
          </Button>
        )}
      </div>
      {error && <div className={styles.errorLabel}>{error}</div>}
    </div>
  );
}

export default Input;
