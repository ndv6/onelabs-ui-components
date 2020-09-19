import React from 'react';
import Select from '../components/Select';
import Tag from '../components/Tag';

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
export const AsyncOnSearch = () => (
  <Select
    asyncOnSearch={keyword =>
      fetch(
        'https://raw.githubusercontent.com/substack/provinces/master/provinces.json?id=' + keyword,
      ).then(async res => {
        const json = await res.json();
        return json.map(d => ({ label: d.name, value: d.name }));
      })
    }
    placeholder="Tap to select"
    label="Pilih Data"
  />
);

export const OnFilter = () => (
  <Select
    onFilter={(keyword, data) => {
      if (keyword == '') {
        return MOCK_DATA;
      }
      return data.filter(d => d.label.includes(keyword));
    }}
    options={MOCK_DATA}
    placeholder="Tap to select"
    label="Pilih Data"
  />
);

export const WithTag = () => {
  const [list, setList] = React.useState([]);
  return (
    <>
      <Select
        asyncOnSearch={keyword =>
          fetch(
            'https://raw.githubusercontent.com/substack/provinces/master/provinces.json?id=' +
              keyword,
          ).then(async res => {
            const json = await res.json();
            return json.map(d => ({ label: d.name, value: d.name }));
          })
        }
        onChange={e => setList([...list, e])}
        placeholder="Tap to select"
        label="Pilih Data"
        value={{ value: '', label: 'Tap to select' }}
      />
      <div style={{ marginTop: 15 }}>
        {list.map(d => (
          <Tag
            key={d.value}
            closeable
            onClose={() => setList(list.filter(item => item.value !== d.value))}
          >
            {d.label}
          </Tag>
        ))}
      </div>
    </>
  );
};

export default {
  title: 'Elements | Select',
  component: Select,
};
