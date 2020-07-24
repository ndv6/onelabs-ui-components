import React, { ReactNode, CSSProperties } from 'react';
import styles from './Text.module.css';

interface Props {
  children: ReactNode;
  size?: number;
  color?: string;
  bold?: boolean;
  className?: string;
  style?: CSSProperties;
}

function Text(props: Props) {
  const { children, size, color, className, style, bold, ...rest } = props;
  return (
    <div
      style={{ fontSize: size, color, fontWeight: bold ? 700 : undefined, ...style }}
      {...rest}
      className={[styles.text, className].join(' ')}
    >
      {children}
    </div>
  );
}

function Title(props: Props) {
  return <Text {...props} className={styles.title} />;
}

Text.Title = Title;

export default Text;