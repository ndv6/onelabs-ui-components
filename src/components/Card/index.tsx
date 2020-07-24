import React, { ReactNode, CSSProperties } from 'react';
import Button from '../Button';
import Checkbox from '../Checkbox';
import { ReactComponent as ArrowRightSvg } from './arrowRight.svg';
import styles from './Card.module.css';

interface Props {
  children: ReactNode;
  onClick?: (event: any) => void;
  selected?: boolean;
  disabled?: boolean;
  style?: CSSProperties;
  withArrow?: boolean;
  checked?: boolean;
  onChange?: (arg: boolean) => void;
  type?: 'checkbox' | 'default';
}

function Card(props: Props) {
  let children = props.children;
  const className = [styles.card];
  if (props.onClick) className.push(styles.hasHover);
  if (props.selected || props.checked) className.push(styles.selected);
  if (props.disabled) className.push(styles.disabled);

  if (props.type && props.type === 'checkbox') {
    children = (
      <Checkbox checked={props.checked} disabled={props.disabled} onChange={props.onClick}>
        {props.children}
      </Checkbox>
    );
  }

  const content = (
    <>
      <div>{children}</div>
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
