import React, { ReactNode, useCallback } from 'react';
import Button from '../Button';
import { createClassName, metaError } from '../helpers';
import styles from './Input.module.css';

const EyeSvg = () => (
  <svg width={26} height={25} viewBox="0 0 26 25">
    <path
      fill="#000000"
      fillRule="nonzero"
      d="M13 13.917c1.227 0 2.222-.97 2.222-2.167 0-1.197-.995-2.167-2.222-2.167-.035 0-.065.008-.099.01a1.58 1.58 0 0 1-.384 1.686 1.68 1.68 0 0 1-1.73.375c0 .033-.01.063-.01.096 0 1.197.996 2.167 2.223 2.167zm9.88-1.578C20.995 8.757 17.267 6.333 13 6.333c-4.268 0-7.997 2.426-9.88 6.006a1.07 1.07 0 0 0 0 .989c1.884 3.582 5.612 6.005 9.88 6.005 4.268 0 7.997-2.425 9.88-6.006a1.07 1.07 0 0 0 0-.988zM13 7.417c2.455 0 4.444 1.94 4.444 4.333 0 2.393-1.99 4.333-4.444 4.333-2.455 0-4.444-1.94-4.444-4.333.002-2.392 1.99-4.33 4.444-4.333zm0 10.833c-3.728 0-7.134-2.076-8.889-5.417a10.113 10.113 0 0 1 4.506-4.378c-.724.915-1.173 2.048-1.173 3.295 0 2.992 2.488 5.417 5.556 5.417s5.556-2.425 5.556-5.417c0-1.247-.449-2.38-1.173-3.295 1.94.956 3.519 2.49 4.506 4.378-1.755 3.341-5.161 5.417-8.889 5.417z"
    />
  </svg>
);

const classNames = createClassName(styles);

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string | ReactNode;
  error?: any;
  className?: string;
  loading?: boolean;
  required?: boolean;
  icon?: any;
  innerRef?: any;
  maxLength?: number;
}

function Input(props: Props) {
  const {
    children,
    label,
    className,
    loading,
    error,
    type,
    icon,
    required,
    innerRef,
    maxLength,
    ...rest
  } = props;

  const [htmlType, setHtmlType] = React.useState('');
  const classnames = classNames({
    [`${className}`]: !!className,
    error: !!metaError(error),
    disabled: props.disabled,
  });

  const handleKeyPress = useCallback((e: any) => {
    if (isNaN(e.key))
      e.preventDefault()
    
    if (maxLength) {
      if (e.target.value.length >= maxLength) {
        e.preventDefault();
        return;
      }
    }
  }, [maxLength])

  return (
    <div className={classnames}>
      {label && (
        <label className={styles.label}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </label>
      )}
      <div className={styles.wrapper}>
        {type === 'number' ? (
          <input
          {...rest}
          ref={innerRef}
          type={htmlType || type}
          className="ga-input"
          onKeyPress={handleKeyPress}
          onKeyDown={event =>
            event.keyCode === 69 || event.keyCode === 190 ? event.preventDefault() : false
          }
          />
        ) : (
          <input className="ga-input" ref={innerRef} type={htmlType || type} maxLength={maxLength} {...rest} />
        )}
        {loading && <div className={styles.loading} />}
        {icon}
        {type === 'password' && (
          <Button onClick={() => setHtmlType(prev => (prev === 'text' ? 'password' : 'text'))}>
            <EyeSvg />
          </Button>
        )}
      </div>
      {!!metaError(error) && <div className={styles.errorLabel}>{metaError(error)}</div>}
    </div>
  );
}

export default Input;
