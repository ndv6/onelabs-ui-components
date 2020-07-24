import React, { ReactNode } from 'react';
import Input from '../Input';
import Button from '../Button';
import { ReactComponent as SearchSvg } from './search.svg';
import styles from './Select.module.css';

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
      <Input icon={<SearchSvg />} placeholder="Tap to search" onChange={onChange} />
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
