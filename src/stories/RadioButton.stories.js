import React from 'react';
import RadioButton from '../components/Radio';

export const Default = () => <RadioButton size="default">i agreed terms and condition</RadioButton>;
export const Disabled = () => (
  <>
    <RadioButton disabled>
      i agreed terms and condition [unchecked]
    </RadioButton>
    <RadioButton checked disabled>
    i agreed terms and condition [checked]
    </RadioButton>
  </>
);
export const AllSize = () => (
  <>
  <RadioButton size="small" checked>
    i agreed to first terms and condition [small]
  </RadioButton>
  <RadioButton checked>
    i agreed to second terms and condition [default]
  </RadioButton>
  <RadioButton size="large" checked>
    i agreed to third terms and condition [large]
  </RadioButton>
  </>
);

export default {
    title: 'Elements | RadioButton',
    component: RadioButton,
};