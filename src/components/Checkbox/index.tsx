import React, { ReactNode } from 'react';
import { createClassName } from '../helpers';
import styles from './Checkbox.module.css';

const CheckedIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="url(#paint0_linear)" />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M18.749 6.49378C19.1103 6.1277 19.7035 6.12037 20.074 6.47742C20.4107 6.80202 20.4475 7.316 20.1799 7.68182L20.0905 7.78678L10.4979 17.5064C10.1586 17.8502 9.6168 17.8764 9.24656 17.5868L9.15012 17.4999L4.22379 12.4111C3.86608 12.0416 3.87921 11.4555 4.25312 11.102C4.59304 10.7806 5.11411 10.7622 5.4748 11.0391L5.57785 11.131L9.83375 15.5269L18.749 6.49378Z"
      fill="white"
    />
    <defs>
      <linearGradient
        id="paint0_linear"
        x1="-4.62479"
        y1="12.7609"
        x2="13.1996"
        y2="28.4271"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#F14545" />
        <stop offset="1" stop-color="#C41432" />
      </linearGradient>
    </defs>
  </svg>
);

const DisabledCheckedIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="url(#paint0_linear)" />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M18.749 6.49378C19.1103 6.1277 19.7035 6.12037 20.074 6.47742C20.4107 6.80202 20.4475 7.316 20.1799 7.68182L20.0905 7.78678L10.4979 17.5064C10.1586 17.8502 9.6168 17.8764 9.24656 17.5868L9.15012 17.4999L4.22379 12.4111C3.86608 12.0416 3.87921 11.4555 4.25312 11.102C4.59304 10.7806 5.11411 10.7622 5.4748 11.0391L5.57785 11.131L9.83375 15.5269L18.749 6.49378Z"
      fill="white"
    />
    <defs>
      <linearGradient
        id="paint0_linear"
        x1="-4.62479"
        y1="12.7609"
        x2="13.1996"
        y2="28.4271"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#F14545" />
        <stop offset="1" stop-color="#C41432" />
      </linearGradient>
    </defs>
  </svg>
);

const UnCheckedIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_i)">
      <rect width="24" height="24" rx="4" fill="white" />
    </g>
    <defs>
      <filter
        id="filter0_i"
        x="0"
        y="0"
        width="24"
        height="25"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="1" />
        <feGaussianBlur stdDeviation="1.5" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
      </filter>
    </defs>
  </svg>
);

const RoundCheckedIcon = () => (
  <svg width={24} height={24} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11 0C4.92339 0 0 4.92339 0 11C0 17.0766 4.92339 22 11 22C17.0766 22 22 17.0766 22 11C22 4.92339 17.0766 0 11 0Z"
      fill="#4ED07D"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M15.3641 6.60983L9.07986 12.83L7.03593 10.8096C6.88835 10.6631 6.64906 10.6631 6.50145 10.8096L5.61068 11.6935C5.46311 11.8399 5.46311 12.0773 5.61068 12.2238L8.81261 15.3932C8.96019 15.5396 9.19948 15.5396 9.34709 15.3932L16.7893 8.02405C16.9369 7.87761 16.9369 7.64017 16.7893 7.4937L15.8985 6.60983C15.751 6.46339 15.5117 6.46339 15.3641 6.60983Z"
      fill="white"
    />
  </svg>
);

const RoundDisabledCheckedIcon = () => (
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

const RoundUnCheckedIcon = () => (
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
  size?: 'default' | 'small';
  checkType?: 'round';
  right?: boolean;
  className?: string;
}

const classNames = createClassName(styles);

function Checkbox(props: Props) {
  const { children, disabled, size, checked, onChange, checkType, right, className } = props;
  const [htmlChecked, setHtmlChecked] = React.useState(false);
  const classnames = classNames({
    [`${className}`]: !!className,
    [`${styles.checkbox}`]: true,
    [`${styles.disabled}`]: disabled,
    [`${styles.small}`]: size === 'small',
  });

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

  if (checkType === 'round') {
    iconChecked = <RoundCheckedIcon />;
    iconUnChecked = <RoundUnCheckedIcon />;

    if (disabled) {
      iconChecked = <RoundDisabledCheckedIcon />;
    }
  }

  return (
    <div className={classnames}>
      {right && (
        <label className={styles.labelRight} htmlFor="checkbox">
          {children}
        </label>
      )}

      <input
        className={styles.input}
        id="checkbox"
        checked={htmlChecked}
        onChange={onChangeInput}
        type="checkbox"
      />
      <div>{htmlChecked ? iconChecked : iconUnChecked}</div>

      {!right && <span className={styles.label}>{children}</span>}
    </div>
  );
}
export default Checkbox;
