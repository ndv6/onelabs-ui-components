import React from 'react';
import Text from '../Text';
import styles from './InputSlider.module.css';

function InputSlider(props: any) {
  let rangeStyle = {
    backgroundSize: ((props.value - props.min) * 100) / (props.max - props.min) + '% 100%',
  };

  return (
    <div data-testid="date-picker">
      <Text bold>{props.label}</Text>
      {(props.withText || props.withText === undefined) && (
        <Text>
          {props.prefix}
          {props.value}
          {props.suffix}
        </Text>
      )}
      <div className={styles.slidercontainer}>
        <input type="range" {...props} style={rangeStyle} />
      </div>
    </div>
  );
}
export default InputSlider;
