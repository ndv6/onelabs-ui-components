import React, { ReactNode } from 'react';
import Button from '../Button';
import ModalSelect from './ModalSelect';
import Modal from '../Modal';
import { createClassName, metaError } from '../helpers';
import styles from './Select.module.css';

const ArrowDown = () => (
  <svg width={24} height={24} viewBox="0 0 24 24">
    <path
      fillRule="evenodd"
      d="M18.87 8.766l-.624-.624c-.148-.148-.387-.148-.536 0L12 13.84 6.29 8.142c-.149-.148-.388-.148-.536 0l-.625.624c-.148.148-.148.388 0 .536l6.603 6.603c.148.148.388.148.536 0l6.603-6.603c.148-.148.148-.388 0-.536z"
    />
  </svg>
);

const classNames = createClassName(styles);

interface Option {
  label: string | ReactNode;
  value: any;
  name: string | ReactNode;
  code: any;
}

type Modify<T, R> = Omit<T, keyof R> & R;
interface Props
  extends Modify<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    {
      defaultValue?: Option;
      value?: Option;
    }
  > {
  label?: string | ReactNode;
  error?: any;
  className?: string;
  native?: boolean;
  options?: Option[];
  asyncOptions?: () => Promise<Option[]>;
  asyncOnSearch?: (keyword: string) => Promise<Option[]>;
  onFilter?: (keyword: string, args: Option[]) => Option[];
  loading?: boolean;
  required?: boolean;
}

function Select(props: Props) {
  const {
    label,
    className,
    loading,
    error,
    required,
    placeholder,
    onChange,
    value,
    options,
    asyncOptions,
    asyncOnSearch,
    onFilter,
    defaultValue,
    native,
    ...rest
  } = props;
  const [selected, setSelected] = React.useState(defaultValue || undefined);
  const [showModal, setShowModal] = React.useState(false);
  const classnames = classNames({
    [`${className}`]: !!className,
    error: !!metaError(error),
  });

  React.useEffect(() => {
    if (value) {
      setSelected(value);
    }
  }, [value]);

  function nativeOnChange(event: any) {
    const selectedValue: any = (options || []).find(d => d.value === event.target.value);
    if (onChange) {
      onChange(selectedValue);
      return;
    }
    setSelected(selectedValue);
  }

  function onSelect(value: any) {
    setSelected(value);
    setShowModal(false);
    if (onChange) onChange(value);
  }

  return (
    <div className={classnames}>
      {label && (
        <label className={styles.label}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </label>
      )}
      <div className={styles.wrapper}>
        {!selected && placeholder && <div className={styles.placeholder}>{placeholder}</div>}
        {selected && <div className={styles.selected}>{selected.label}</div>}
        {native && (
          <select
            onChange={nativeOnChange}
            value={selected ? selected.value : undefined}
            className={styles.nativeSelect}
            {...rest}
          >
            {(options || []).map((d, index: number) => (
              <option key={index} value={d.value}>
                {d.label}
              </option>
            ))}
          </select>
        )}
        {!native && <Button className={styles.nativeSelect} onClick={() => setShowModal(true)} />}
        {loading && <div className={styles.loading} />}
        <ArrowDown />
      </div>
      {!!metaError(error) && <div className={styles.errorLabel}>{metaError(error)}</div>}
      {showModal && (
        <Modal title="" onClose={() => setShowModal(false)} type="fullscreen">
          <ModalSelect
            onSelect={onSelect}
            label={label}
            options={options || []}
            asyncOptions={asyncOptions}
            asyncOnSearch={asyncOnSearch}
            onFilter={onFilter}
          />
        </Modal>
      )}
    </div>
  );
}

export default Select;
