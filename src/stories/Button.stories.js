import React from 'react';
import Button, { Anchor } from '../components/Button';

export const Default = () => <Button className={'lmao'}>Default</Button>;
export const Rounded = () => (
  <Button variant="primary" style={{ width: 60, height: 60 }} rounded>
    R
  </Button>
);
export const Primary = () => <Button variant="primary">Primary</Button>;
export const PrimaryWithLongString = () => (
  <div style={{ width: 320, padding: '50px' }}>
    <Button variant="primary">Saya Sudah Membaca & Menyetujui</Button>
  </div>
);
export const Transparent = () => (
  <div style={{ background: '#000', padding: 20 }}>
    <Button variant="transparent">Transparent</Button>
  </div>
);
export const Secondary = () => (
  <div style={{ background: 'rgba(0, 0, 0, 0.05)' }}>
    <Button variant="secondary">Secondary</Button>
  </div>
);
export const Ghost = () => <Button variant="ghost">Ghost</Button>;
export const Disabled = () => (
  <div className="example-row">
    <Button variant="primary" disabled>
      Primary Disabled
    </Button>
    <Button variant="secondary" disabled>
      secondary Disabled
    </Button>
    <Button variant="ghost" disabled>
      ghost Disabled
    </Button>
  </div>
);
export const Size = () => (
  <div className="example-row">
    <Button variant="primary" size="small">
      Primary small
    </Button>
    <Button variant="secondary" size="small">
      secondary small
    </Button>
    <Button variant="ghost" size="small">
      ghost small
    </Button>
  </div>
);
export const FullWidth = () => (
  <Button variant="primary" full>
    Default
  </Button>
);
export const Loading = () => (
  <Button variant="primary" loading>
    Default
  </Button>
);

export const ButtonAnchor = () => <Anchor href="/lmao">Anchor</Anchor>;

export default {
  title: 'Elements | Button',
  component: Button,
};
