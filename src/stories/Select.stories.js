import React from 'react';
import Select from '../components/Select';

const MOCK_DATA = [
  {
    label: 'data 1',
    value: '1',
  },
  {
    label: 'data 2',
    value: '2',
  },
  {
    label: 'data 3',
    value: '3',
  },
];

export const Default = () => (
  <Select options={MOCK_DATA} placeholder="Tap to select" label="Pilih Data" />
);
export const Native = () => (
  <Select options={MOCK_DATA} native placeholder="Tap to select" label="Pilih Data" />
);
export const AsyncOptions = () => (
  <Select
    asyncOptions={() =>
      fetch('https://raw.githubusercontent.com/substack/provinces/master/provinces.json').then(
        async res => {
          const json = await res.json();
          return json.map(d => ({ label: d.name, value: d.name }));
        },
      )
    }
    placeholder="Tap to select"
    label="Pilih Data"
  />
);

export default {
  title: 'Elements | Select',
  component: Select,
};
