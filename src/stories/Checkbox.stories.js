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

export const Round = () => <Checkbox checkType="round">i agreed terms and condition</Checkbox>;

export const Right = () => (
  <Checkbox checkType="round" right>
    i agreed terms and condition
  </Checkbox>
);

export const RoundDisabled = () => (
  <Checkbox checked disabled checkType="round">
    i agreed terms and condition
  </Checkbox>
);

export const RoundSmall = () => (
  <Checkbox checked disabled checkType="round" size="small">
    i agreed terms and condition
  </Checkbox>
);

export default {
  title: 'Elements | Checkbox',
  component: Checkbox,
};
