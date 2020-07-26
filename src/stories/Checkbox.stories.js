import React from 'react';
import Checkbox from '../components/Checkbox';

export const Default = () => <Checkbox>i agreed terms and condition</Checkbox>;
export const Disabled = () => (
  <Checkbox checked disabled>
    i agreed terms and condition
  </Checkbox>
);
export const Small = () => (
  <Checkbox checked size="small" disabled>
    i agreed terms and condition
  </Checkbox>
);

export default {
  title: 'Elements | Checkbox',
  component: Checkbox,
};
