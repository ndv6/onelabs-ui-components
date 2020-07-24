import React, { ReactNode } from 'react';
import styles from './Flex.module.css';

interface Props extends React.CSSProperties {
  children: ReactNode;
}

function Flex(props: Props) {
  return (
    <div className={styles.div} style={{ ...props }}>
      {props.children}
    </div>
  );
}

export default Flex;
