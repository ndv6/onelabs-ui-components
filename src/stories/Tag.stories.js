import React from 'react';
import Tag from '../components/Tag';

export const Default = () => (
  <div>
    <Tag>Tag</Tag>
  </div>
);

export const WithColor = () => (
  <div>
    <Tag color="red">Tag red</Tag>
    <Tag color="green">Tag green</Tag>
    <Tag color="grey">Tag grey</Tag>
    <Tag>Tag default</Tag>
  </div>
);

export const CloseAble = () => (
  <div>
    <Tag closeable color="red">
      Tag red
    </Tag>
  </div>
);

export const OnClose = () => (
  <div>
    <Tag closeable onClose={() => {}} color="red">
      Tag red
    </Tag>
  </div>
);

export default {
  title: 'Elements | Tag',
  component: Tag,
};
