import React from 'react';
import Text from '../components/Text';

export const Default = () => <Text>Text</Text>;
export const Color = () => <Text color="red">Text Color Red</Text>;
export const Size = () => <Text size={16}>Text Size 16</Text>;
export const Bold = () => (
  <Text bold size={16}>
    Text Bold Size 16
  </Text>
);
export const Title = () => <Text.Title>Title</Text.Title>;

export default {
  title: 'Elements | Text',
  component: Text,
};
