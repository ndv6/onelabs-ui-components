import React from 'react';
import Text from '../Text';
import styles from './InputSlider.module.css';

function InputSlider(props: any) {
  function thousands_separators(num: any) {
    var num_parts = ('' + num).split('.');
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return num_parts.join('.');
  }

  let rangeStyle = {
    backgroundSize: ((props.value - props.min) * 100) / (props.max - props.min) + '% 200%',
  };

  return (
    <div data-testid="date-picker">
      <Text bold>{props.label}</Text>
      <Text>
        {props.prefix}
        {thousands_separators(props.value)}
        {props.suffix}
      </Text>
      <div className={styles.slidercontainer}>
        <input type="range" {...props} style={rangeStyle} />
      </div>
    </div>
  );
}
export default InputSlider;
