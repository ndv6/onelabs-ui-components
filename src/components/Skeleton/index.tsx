import React from 'react';
import styles from './Skeleton.module.css';

function Skeleton(props: { height?: number; width?: number; radius?: number }) {
  return (
    <div
      style={{ height: props.height, borderRadius: props.radius || 4, width: props.width }}
      className={styles.skeleton}
    />
  );
}

export default Skeleton;
