import React, { ReactNode } from 'react';
import styles from './Checkbox.module.css';

const CheckedIcon = () => (
  <svg width={24} height={24} viewBox="0 0 24 24">
    <defs>
      <linearGradient id="a" x1="13.368%" x2="87.636%" y1="16.036%" y2="81.312%">
        <stop offset="0%" stopColor="#6BAA12" />
        <stop offset="100%" stopColor="#009E9B" />
      </linearGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
      <path
        fill="url(#a)"
        d="M11 0C4.923 0 0 4.923 0 11s4.923 11 11 11 11-4.923 11-11S17.077 0 11 0z"
        transform="translate(1 1)"
      />
      <path
        fill="#FFF"
        d="M16.364 7.61l-6.284 6.22-2.044-2.02a.38.38 0 0 0-.535 0l-.89.883a.373.373 0 0 0 0 .53l3.202 3.17a.38.38 0 0 0 .534 0l7.442-7.369a.373.373 0 0 0 0-.53l-.89-.884a.38.38 0 0 0-.535 0z"
      />
    </g>
  </svg>
);

const DisabledCheckedIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
    <g fill="none" fillRule="evenodd">
      <path
        fill="#C7C7C7"
        d="M11 0C4.923 0 0 4.923 0 11s4.923 11 11 11 11-4.923 11-11S17.077 0 11 0z"
        transform="translate(1 1)"
      />
      <path
        fill="#FFF"
        d="M15.364 6.61L9.08 12.83l-2.044-2.02c-.148-.147-.387-.147-.535 0l-.89.883c-.148.147-.148.384 0 .53l3.202 3.17c.147.147.386.147.534 0l7.442-7.369c.148-.146.148-.384 0-.53l-.89-.884c-.148-.147-.387-.147-.535 0z"
        transform="translate(1 1)"
      />
    </g>
  </svg>
);

const UnCheckedIcon = () => (
  <svg width={24} height={24} viewBox="0 0 24 24">
    <g fill="none" fillRule="evenodd">
      <path
        fill="#C7C7C7"
        d="M12 1c6.077 0 11 4.923 11 11s-4.923 11-11 11S1 18.077 1 12 5.923 1 12 1zm0 1C6.476 2 2 6.476 2 12s4.476 10 10 10 10-4.476 10-10S17.524 2 12 2z"
      />
      <path
        fill="#ECECEC"
        d="M12 2C6.476 2 2 6.476 2 12s4.476 10 10 10 10-4.476 10-10S17.524 2 12 2z"
      />
    </g>
  </svg>
);

interface Props {
  children: ReactNode;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (args: boolean) => void;
}

function Checkbox(props: Props) {
  const { children, disabled, checked, onChange } = props;
  const [htmlChecked, setHtmlChecked] = React.useState(false);
  function onChangeInput() {
    if (onChange) {
      onChange(!checked);
      return;
    }
    setHtmlChecked(prev => !prev);
  }
  React.useEffect(() => {
    setHtmlChecked(checked || false);
  }, [checked]);

  let iconChecked = <CheckedIcon />;
  let iconUnChecked = <UnCheckedIcon />;

  if (disabled) {
    iconChecked = <DisabledCheckedIcon />;
  }

  return (
    <div className={[styles.checkbox, disabled ? styles.disabled : ''].join(' ')}>
      <input
        className={styles.input}
        checked={htmlChecked}
        onChange={onChangeInput}
        type="checkbox"
      />
      {htmlChecked ? iconChecked : iconUnChecked}

      <span className={styles.label}>{children}</span>
    </div>
  );
}
export default Checkbox;
