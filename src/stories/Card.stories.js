import React from 'react';
import { action } from '@storybook/addon-actions';
import Card from '../components/Card';
import Text from '../components/Text';

export const Default = () => (
  <Card>
    <div>
      <Text bold size={16}>
        Kartu Debit
      </Text>
      <Text>
        Gunakan untuk pembayaran online dan tarik tunai di lebih dari 50 ribu ATM di seluruh
        Indonesia
      </Text>
    </div>
  </Card>
);
export const Selected = () => <Card selected>i agreed terms and condition</Card>;
export const Disabled = () => <Card disabled>i agreed terms and condition</Card>;
export const DisabledCheckbox = () => {
  return (
    <Card type="checkbox" checked disabled>
      Disabled Checkbox Card
    </Card>
  );
};
export const List = () => <Card.List list={[{ children: 'list 1' }, { children: 'list 2' }]} />;
export const Clickable = () => <Card onClick={() => action('button-click')}>Clickable Card</Card>;
export const ClickableWithArrow = () => (
  <Card withArrow onClick={() => action('button-click')}>
    Clickable Card with arrow
  </Card>
);
export const ClickableCheckbox = () => {
  const [checked, setChecked] = React.useState(false);
  return (
    <Card
      style={{ padding: 15 }}
      type="checkbox"
      checked={checked}
      onClick={() => setChecked(!checked)}
    >
      <div>
        <Text bold size={16}>
          Kartu Debit
        </Text>
        <Text>
          Gunakan untuk pembayaran online dan tarik tunai di lebih dari 50 ribu ATM di seluruh
          Indonesia
        </Text>
      </div>
    </Card>
  );
};
export const ListClickable = () => {
  return (
    <Card.List
      list={[
        { children: 'Clickable Card 1', onClick: () => action('button-click') },
        { children: 'Clickable Card 2', onClick: () => action('button-click') },
      ]}
    />
  );
};

export const ListClickableArrow = () => {
  const defConfig = {
    onClick: () => action('button-click'),
    withArrow: true,
  };
  return (
    <Card.List
      list={[
        { children: 'Clickable Card with arrow 1', ...defConfig },
        { children: 'Clickable Card with arrow 2', ...defConfig },
      ]}
    />
  );
};
export const ListCheckboxWithChecked = () => {
  const [selected, setSelected] = React.useState('1');
  const defConfig = {
    type: 'checkbox',
  };
  return (
    <Card.List
      list={[
        {
          children: 'Clickable Card with arrow 1',
          checked: selected === '1',
          onClick: () => setSelected('1'),
          ...defConfig,
        },
        {
          children: 'Clickable Card with arrow 2',
          checked: selected === '2',
          onClick: () => setSelected('2'),
          ...defConfig,
        },
      ]}
    />
  );
};

export default {
  title: 'Elements | Card',
  component: Card,
};
