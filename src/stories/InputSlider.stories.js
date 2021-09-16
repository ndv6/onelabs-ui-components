import React from 'react';
import InputSlider from '../components/InputSlider';

export const Default = () => {
  return (
    <InputSlider
      label="Jumlah pinjaman"
      prefix="IDR "
      min={1000000}
      max={10000000}
      value={5000000}
      onInput={() => {}}
    />
  );
};

export default {
  title: 'Elements | InputSlider',
  component: InputSlider,
};
