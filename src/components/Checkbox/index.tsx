import React, { ReactNode } from 'react';
import styles from './Checkbox.module.css';

const CheckedIcon = () => (
  <span className={styles.checked}>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <defs>
          <linearGradient id="5dv7zurypa" x1="13.368%" x2="87.636%" y1="16.036%" y2="81.312%">
              <stop offset="0%" stopColor="#F14545"/>
              <stop offset="100%" stopColor="#C41432"/>
          </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
          <g fill="url(#5dv7zurypa)" transform="translate(-16 -638)">
              <g>
                  <g transform="translate(0 622) translate(16 16)">
                      <rect width="24" height="24" rx="4"/>
                  </g>
              </g>
          </g>
      </g>
    </svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
      <g fill="none" fillRule="evenodd">
          <g fill="#FFF">
              <g>
                  <g>
                      <g>
                          <path d="M15.75 3.494c.36-.366.954-.374 1.324-.017.337.325.374.839.106 1.205l-.09.105-9.592 9.72c-.339.343-.88.37-1.251.08l-.096-.087L1.224 9.41c-.358-.37-.344-.956.03-1.31.34-.32.86-.339 1.221-.062l.103.092 4.256 4.396 8.915-9.033z" transform="translate(-19 -641) translate(0 622) translate(16 16) translate(3 3)"/>
                      </g>
                  </g>
              </g>
          </g>
      </g>
    </svg>
  </span>
);

const CheckedDisabled = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <g fill="none" fillRule="evenodd">
        <g fill="#EB2629">
            <g>
                <path d="M21 4.658c.481-.488 1.272-.498 1.766-.022.449.433.498 1.119.141 1.606l-.12.14-12.79 12.96c-.452.458-1.174.493-1.668.107l-.128-.116-6.569-6.785c-.477-.493-.46-1.274.04-1.745.453-.429 1.147-.454 1.628-.084l.138.122 5.674 5.861L21 4.658z" transform="translate(-32 -278) translate(32 278)"/>
            </g>
        </g>
    </g>
  </svg>
)



const UnCheckedIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <defs>
        <filter id="9ibllx6crb" width="116.7%" height="116.7%" x="-8.3%" y="-8.3%" filterUnits="objectBoundingBox">
            <feGaussianBlur in="SourceAlpha" result="shadowBlurInner1" stdDeviation="1.5"/>
            <feOffset dy="1" in="shadowBlurInner1" result="shadowOffsetInner1"/>
            <feComposite in="shadowOffsetInner1" in2="SourceAlpha" k2="-1" k3="1" operator="arithmetic" result="shadowInnerInner1"/>
            <feColorMatrix in="shadowInnerInner1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        </filter>
        <rect id="5qcuvvij1a" width="24" height="24" x="0" y="0" rx="4"/>
    </defs>
    <g fill="none" fillRule="evenodd">
        <g>
            <g>
                <g transform="translate(-16 -638) translate(0 622) translate(16 16)">
                    <use fill="#FFF" href="#5qcuvvij1a"/>
                    <use fill="#000" filter="url(#9ibllx6crb)" href="#5qcuvvij1a"/>
                </g>
            </g>
        </g>
    </g>
  </svg>
);

const RadioBorder = () => (
  <svg width="24" height="24" viewBox="0 0 24 24">
      <defs>
          <filter id="uv6znpzakb" width="116.7%" height="116.7%" x="-8.3%" y="-8.3%" filterUnits="objectBoundingBox">
              <feGaussianBlur in="SourceAlpha" result="shadowBlurInner1" stdDeviation="1.5"/>
              <feOffset dy="1" in="shadowBlurInner1" result="shadowOffsetInner1"/>
              <feComposite in="shadowOffsetInner1" in2="SourceAlpha" k2="-1" k3="1" operator="arithmetic" result="shadowInnerInner1"/>
              <feColorMatrix in="shadowInnerInner1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          </filter>
          <circle id="e8oleaybua" cx="12" cy="12" r="12"/>
      </defs>
      <g fill="none" fillRule="evenodd">
          <g>
              <g transform="translate(-32 -462) translate(32 462)">
                  <use fill="#FFF" href="#e8oleaybua"/>
                  <use fill="#000" filter="url(#uv6znpzakb)" href="#e8oleaybua"/>
              </g>
          </g>
      </g>
  </svg>
)

const RadioFiller = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
    <defs>
        <linearGradient id="g39ug4eaea" x1="13.368%" x2="87.636%" y1="16.036%" y2="81.312%">
            <stop offset="0%" stopColor="#F14545"/>
            <stop offset="100%" stopColor="#C41432"/>
        </linearGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
        <g fill="url(#g39ug4eaea)" transform="translate(-38 -468)">
            <g transform="translate(32 462)">
                <circle cx="12" cy="12" r="6"/>
            </g>
        </g>
    </g>
  </svg>
)

const RadioDisabled = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
    <defs>
        <linearGradient id="9r13h1ct8a" x1="0%" x2="100%" y1="50%" y2="50%">
            <stop offset="0%" stopColor="#E7E7E7"/>
            <stop offset="100%" stopColor="#BDBDBD"/>
        </linearGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
        <g fill="url(#9r13h1ct8a)" transform="translate(-38 -284)">
            <g transform="translate(32 278)">
                <circle cx="12" cy="12" r="6"/>
            </g>
        </g>
    </g>
  </svg>  
)

interface Props {
  children: ReactNode;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (args: boolean) => void;
  size?: 'default' | 'small';
  radio?: boolean;
  type?: 'check';
}

function Checkbox(props: Props) {
  const { children, disabled, size, checked, onChange } = props;
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

  if (props.radio) {
    iconChecked = (<span className={styles.radioChecked}>
      <RadioBorder />
      <RadioFiller />
    </span>)
    iconUnChecked = <RadioBorder />;
  }

  if (disabled) {
    iconChecked = (<span className={styles.disabledChecked}>
      <CheckedIcon />
    </span>)
  }

  if (disabled && props.radio) {
    iconChecked = (<span className={styles.radioChecked}>
      <RadioBorder />
      <RadioDisabled />
    </span>)
  }


  if (props.type === 'check' && disabled) {
    iconChecked = (<span>
      <CheckedDisabled />
    </span>)
  }

  return (
    <div
      className={[
        styles.checkbox,
        disabled ? styles.disabled : '',
        size === 'small' ? styles.small : '',
      ].join(' ')}
    >
      <input
        className={styles.input}
        checked={htmlChecked}
        onChange={onChangeInput}
        type="checkbox"
      />
      <div>{htmlChecked ? iconChecked : iconUnChecked}</div>

      <span className={styles.label}>{children}</span>
    </div>
  );
}
export default Checkbox;
