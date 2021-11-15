import React, { ReactNode } from 'react';
import Input from '../Input';
import Button from '../Button';
import Text from '../Text';
import styles from './Select.module.css';
import { debounce } from '../helpers';

const SearchSvg = () => (
  <svg width={24} height={24} viewBox="0 0 24 24">
    <path
      fillRule="evenodd"
      d="M19.86 18.625l-3.787-3.787c-.071-.072-.165-.109-.265-.109h-.412c.983-1.138 1.579-2.62 1.579-4.242C16.975 6.904 14.07 4 10.487 4 6.904 4 4 6.904 4 10.487c0 3.584 2.904 6.488 6.487 6.488 1.622 0 3.104-.596 4.242-1.579v.412c0 .1.04.194.11.265l3.786 3.787c.146.146.383.146.53 0l.705-.705c.146-.147.146-.384 0-.53zm-9.373-3.147c-2.757 0-4.99-2.234-4.99-4.99 0-2.758 2.233-4.99 4.99-4.99s4.99 2.232 4.99 4.99c0 2.756-2.233 4.99-4.99 4.99z"
    />
  </svg>
);

async function asyncCall(
  asyncOptions: () => any,
  setList: Function,
  setLoading: Function,
  subscribe = true,
  setError: Function,
) {
  setLoading(true);
  try {
    const list = await asyncOptions();
    if (subscribe) {
      setList(list);
      setLoading(false);
    }
  } catch (error) {
    if (subscribe) {
      setList([]);
      setLoading(false);
      setError(true);
    }
  }
}

interface Option {
  label?: string | ReactNode;
  value?: any;
  name?: string | ReactNode;
  title?: string | ReactNode;
  id?: any;
  code?: any;
}

export default function ModalSelect(props: {
  onSelect: Function;
  asyncOptions?: () => Promise<any[]>;
  asyncOnSearch?: (keyword: string) => Promise<Option[]>;
  onFilter?: (keyword: string, args: Option[]) => Option[];
  options?: Option[];
  groupOptions?: { [group: string]: Option[] };
  label: string | ReactNode;
  placeholderSearch?: string;
  errorComponent?: ReactNode;
  buttonRefreshText?: string;
}) {
  const inputRef: any = React.useRef(null);
  const [list, setList] = React.useState(props.options || []);
  const [listGroup, setListGroup] = React.useState(props.groupOptions || {});
  const [keyword, setKeyword] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const defaultErrMessage =
    'Maaf, terjadi kendala dalam menampilkan data. Silahkan klik refresh untuk memuat kembali tampilan/data.';

  const asyncOnSearchDebounce = debounce(function() {
    asyncCall(
      () => {
        if (props.asyncOnSearch) {
          return props.asyncOnSearch(inputRef.current.value || '');
        }
        return [];
      },
      setList,
      setLoading,
      true,
      setError,
    );
  }, 500);

  async function onChange(e: any) {
    if (props.asyncOnSearch) {
      asyncOnSearchDebounce();
      return;
    }
    if (props.onFilter) {
      setList(props.onFilter(e.target.value, list));
      let newList: { [group: string]: Option[] } = {};
      for (const [key, value] of Object.entries(listGroup)) {
        newList[key] = props.onFilter(e.target.value, value);
      }
      setListGroup(newList);
      return;
    }
    setKeyword(e.target.value);
  }

  React.useEffect(() => {
    let subscribe = true;
    if (props.asyncOptions) {
      asyncCall(props.asyncOptions, setList, setLoading, subscribe, setError);
    }
    return () => {
      subscribe = false;
    };
  }, [props.asyncOptions]);

  return (
    <div style={{ padding: '10px 16px 0px' }}>
      <label style={{ fontWeight: 700, fontSize: 16 }}>{props.label}</label>
      <Input
        innerRef={inputRef}
        icon={
          <span style={{ marginLeft: 15 }}>
            <SearchSvg />
          </span>
        }
        className={styles.selectSearchInput}
        id="ui-search-input"
        placeholder={props.placeholderSearch ? props.placeholderSearch : 'Tap to search'}
        onChange={onChange}
        style={{ margin: 'auto' }}
      />
      <div style={{ overflow: 'auto', height: 'calc(100vh - 130px)' }}>
        {Object.entries(listGroup).map(d => (
          <>
            <div style={{ fontWeight: 700, fontSize: 16, paddingTop: 20 }}>{d[0]}</div>
            {d[1]
              .filter((d: any) =>
                (d.label || d.name)
                  .toString()
                  .toLowerCase()
                  .includes(keyword.toLowerCase()),
              )
              .map((o, i) => (
                <Button key={i} onClick={() => props.onSelect(o)} className={styles.option} full>
                  {o.label || o.name || o.title}
                </Button>
              ))}
          </>
        ))}

        {list
          .filter((d: any) =>
            (d.label || d.name)
              .toString()
              .toLowerCase()
              .includes(keyword.toLowerCase()),
          )
          .map((d: any, i: number) => (
            <Button key={i} onClick={() => props.onSelect(d)} className={styles.option} full>
              {d.label || d.name || d.title}
            </Button>
          ))}
        {list.length < 1 && !loading && (
          <div style={{ padding: 30, textAlign: 'center' }}>
            {props.asyncOnSearch ? (
              'Type to search'
            ) : (
              <>
                {error && (
                  <>
                    {props.errorComponent ? (
                      props.errorComponent
                    ) : (
                      <Text size={16} style={{ marginTop: 84, marginBottom: 30 }}>
                        {defaultErrMessage}
                      </Text>
                    )}
                    <Button
                      variant="primary"
                      full={true}
                      disabled={loading}
                      style={{ marginTop: 0 }}
                      onClick={() =>
                        asyncCall(
                          props.asyncOptions ? props.asyncOptions : () => {},
                          setList,
                          setLoading,
                          true,
                          setError,
                        )
                      }
                    >
                      {props.buttonRefreshText ? props.buttonRefreshText : 'Refresh'}
                    </Button>
                  </>
                )}
              </>
            )}
          </div>
        )}
        {loading && <div style={{ padding: 30, textAlign: 'center' }}>Loading...</div>}
      </div>
    </div>
  );
}
