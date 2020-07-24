import React from 'react';
import Flex from './index';

const defStyle = {
  padding: 20,
  background: 'lightblue',
};

export const Default = () => <Flex>Flex Element</Flex>;
export const Layout = () => {
  return (
    <Flex {...defStyle} justifyContent="space-between">
      <Flex {...defStyle}>Left</Flex>
      <Flex {...defStyle}>Right</Flex>
    </Flex>
  );
};
export default {
  title: 'Elements | Flex',
  component: Flex,
};
