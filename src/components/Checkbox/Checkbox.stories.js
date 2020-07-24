import React from 'react';
import Checkbox from './index';

export const Default = () => <Checkbox>i agreed terms and condition</Checkbox>;
export const Disabled = () => (
  <Checkbox checked disabled>
    i agreed terms and condition
  </Checkbox>
);

export default {
  title: 'Elements | Checkbox',
  component: Checkbox,
};
