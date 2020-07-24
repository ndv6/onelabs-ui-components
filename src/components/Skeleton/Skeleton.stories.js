import React from 'react';
import Skeleton from './index';

export const Default = () => <Skeleton />;
export const WithHeightWidth = () => <Skeleton height={40} width={300} />;
export const WithRadius = () => <Skeleton radius={20} height={40} width={300} />;

export default {
  title: 'Elements | Skeleton',
  component: Skeleton,
};
