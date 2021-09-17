import React, { ReactNode } from 'react';
import Text from '../Text';
import styles from './InputSlider.module.css';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string | ReactNode;
  value?: any;
  min?: any;
  max?: any;
  prefix?: string;
  suffix?: string;
  withText?: boolean;
}

function InputSlider(props: Props) {
  const { label, value, min, max, prefix, suffix, withText, ...rest } = props;

  let rangeStyle = {
    backgroundSize: ((value - min) * 100) / (max - min) + '% 100%',
  };

  return (
    <div data-testid="date-picker">
      <Text bold>{label}</Text>
      {withText ||
        (withText === undefined && (
          <Text>
            {prefix}
            {value}
            {suffix}
          </Text>
        ))}
      <div className={styles.slidercontainer}>
        <input type="range" style={rangeStyle} {...rest} />
      </div>
    </div>
  );
}
export default InputSlider;
