import React, { ReactNode } from 'react';
import Input from '../Input';
import Button from '../Button';
import styles from './Select.module.css';

const SearchSvg = () => (
  <svg width={24} height={24} viewBox="0 0 24 24">
    <path
      fillRule="evenodd"
      d="M19.86 18.625l-3.787-3.787c-.071-.072-.165-.109-.265-.109h-.412c.983-1.138 1.579-2.62 1.579-4.242C16.975 6.904 14.07 4 10.487 4 6.904 4 4 6.904 4 10.487c0 3.584 2.904 6.488 6.487 6.488 1.622 0 3.104-.596 4.242-1.579v.412c0 .1.04.194.11.265l3.786 3.787c.146.146.383.146.53 0l.705-.705c.146-.147.146-.384 0-.53zm-9.373-3.147c-2.757 0-4.99-2.234-4.99-4.99 0-2.758 2.233-4.99 4.99-4.99s4.99 2.232 4.99 4.99c0 2.756-2.233 4.99-4.99 4.99z"
    />
  </svg>
);

async function asyncCall(
  asyncOptions: () => Promise<any[]>,
  setList: Function,
  setLoading: Function,
) {
  setLoading(true);
  try {
    const list = await asyncOptions();
    setList(list);
    setLoading(false);
  } catch (error) {
    setList([]);
    setLoading(false);
  }
}

export default function ModalSelect(props: {
  onSelect: Function;
  asyncOptions?: () => Promise<any[]>;
  options: any;
  label: string | ReactNode;
}) {
  const [list, setList] = React.useState(props.options || []);
  const [keyword, setKeyword] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  function onChange(e: any) {
    setKeyword(e.target.value);
  }

  React.useEffect(() => {
    if (props.asyncOptions) {
      asyncCall(props.asyncOptions, setList, setLoading);
    }
  }, [props.asyncOptions]);
  return (
    <div style={{ padding: '15px 20px 0px 20px' }}>
      <label style={{ fontWeight: 700 }}>{props.label}</label>
      <Input
        icon={
          <span style={{ marginLeft: 15 }}>
            <SearchSvg />
          </span>
        }
        placeholder="Tap to search"
        onChange={onChange}
      />
      <div style={{ overflow: 'auto', height: 'calc(100vh - 130px)' }}>
        {list
          .filter((d: any) =>
            d.label
              .toString()
              .toLowerCase()
              .includes(keyword.toLowerCase()),
          )
          .map((d: any, i: number) => (
            <Button key={i} onClick={() => props.onSelect(d)} className={styles.option} full>
              {d.label}
            </Button>
          ))}
        {list.length < 1 && !loading && (
          <div style={{ padding: 30, textAlign: 'center' }}>Data not found</div>
        )}
        {loading && <div style={{ padding: 30, textAlign: 'center' }}>Loading...</div>}
      </div>
    </div>
  );
}
