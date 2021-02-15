import React from 'react';
import Input from '../components/Input';

export const Default = () => <Input placeholder="Tap to type" label="Username" />;
export const Disabled = () => <Input disabled placeholder="Tap to type" label="Username" />;
export const Loading = () => <Input placeholder="Tap to type" label="Username" loading />;
export const Password = () => <Input type="password" placeholder="Tap to type" label="Username" />;
export const Required = () => <Input placeholder="Tap to type" maxLength={5} label="Username" required />;
export const TypeNumber = () => <Input placeholder="Tap to type" label="NIK" required type="number" />;
export const MaxLengthNumber = () => <Input placeholder="Tap to type" label="NIK" required type="number" maxLength={5} />;
export const MaxLengthString = () => <Input placeholder="Tap to type" label="String" required maxLength={5} />;
export const WithError = () => (
  <Input placeholder="Tap to type" label="Username" error="Please input username" />
);

export default {
  title: 'Elements | Input',
  component: Input,
};
