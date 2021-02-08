import React, { ReactNode } from 'react';
import styles from './RadioButton.module.css';

interface RadioProps {
    size: number,
}

const RadioBorder = (props: RadioProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 24 24">
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
  
const RadioFiller = (props: RadioProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={props.size} height={props.size} viewBox="0 0 12 12">
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

const RadioDisabled = (props: RadioProps) => (
<svg xmlns="http://www.w3.org/2000/svg" width={props.size} height={props.size} viewBox="0 0 12 12">
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
    size?: 'default' | 'small' | 'large';
    radio?: boolean;
    type?: 'check';
}

function RadioButton(props: Props) {
    const { children, disabled, size, checked, onChange } = props;
    const [htmlChecked, setHtmlChecked] = React.useState(false);
    const sizeNumbers = {
        'small': 18,
        'default': 21,
        'large': 24,
    }
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

    var chosenSize = sizeNumbers['default']

    if (size) {
        chosenSize = sizeNumbers[size]
    }

    return (
    <div
        className={[
        styles.checkbox,
        disabled ? styles.disabled : '',
        ].join(' ')}
    >
        <input
        className={styles.input}
        checked={htmlChecked}
        onChange={onChangeInput}
        type="checkbox"
        />
    {disabled ? (<span className={styles.radioChecked} style={{width:chosenSize, height:chosenSize}}>
        <RadioBorder size={chosenSize}/>
        <RadioDisabled size={htmlChecked ? Math.round(chosenSize / 2) : 0}/>
    </span>) : 
        <div>{htmlChecked ? (<span className={styles.radioChecked} style={{width:chosenSize, height:chosenSize}}>
        <RadioBorder size={chosenSize}/>
        <RadioFiller size={Math.round(chosenSize / 2)}/>
        </span>) : <RadioBorder size={chosenSize}/>}</div>
    }

        <span className={styles.label}>{children}</span>
    </div>
    );
}

export default RadioButton;