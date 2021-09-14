import React, { ReactNode, CSSProperties } from 'react';
import Button from '../Button';
import Checkbox from '../Checkbox';
import styles from './Card.module.css';

const ArrowRightSvg = () => (
  <svg width={24} height={24} viewBox="0 0 24 24">
    <path
      fillRule="evenodd"
      d="M8.748 5.13l-.625.624c-.148.147-.148.387 0 .535L13.821 12l-5.698 5.711c-.148.148-.148.388 0 .535l.625.625c.147.147.387.147.535 0l6.603-6.603c.148-.148.148-.388 0-.536L9.283 5.13c-.148-.147-.388-.147-.535 0z"
    />
  </svg>
);

interface Props {
  children: ReactNode;
  onClick?: (event: any) => void;
  selected?: boolean;
  disabled?: boolean;
  style?: CSSProperties;
  withArrow?: boolean;
  checked?: boolean;
  onChange?: (arg: boolean) => void;
  type?: 'checkbox' | 'default' | 'check';
  radio?: boolean;
}

function Card(props: Props) {
  let children = props.children;
  const className = [styles.card];
  if (props.onClick) className.push(styles.hasHover);
  if (props.selected || props.checked) className.push(styles.selected);
  if (props.disabled) className.push(styles.disabled);

  if (props.type && props.type === 'checkbox') {
    children = (
      <Checkbox
        radio={props.radio}
        checked={props.checked}
        disabled={props.disabled}
        onChange={props.onClick}
      >
        {props.children}
      </Checkbox>
    );
  }

  if (props.type && props.type === 'check') {
    children = (
      <Checkbox
        type="check"
        checked={props.checked}
        disabled={props.disabled}
        onChange={props.onClick}
      >
        {props.children}
      </Checkbox>
    );
  }

  const content = (
    <>
      {children}
      {props.withArrow && <ArrowRightSvg />}
    </>
  );

  if (props.onClick) {
    return (
      <Button style={props.style} full onClick={props.onClick} className={className.join(' ')}>
        {content}
      </Button>
    );
  }
  return (
    <div style={props.style} className={className.join(' ')}>
      {content}
    </div>
  );
}

function List(props: { list: Props[] }) {
  return props.list.map((d, i) => <Card key={i} {...d} />);
}

Card.List = List;

export default Card;
