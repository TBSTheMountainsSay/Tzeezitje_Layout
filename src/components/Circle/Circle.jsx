import React from 'react';
import styles from './Circle.module.scss';

const Circle = ({ text, black }) => {
  return (
    <div
      className={
        black ? `${styles.circle} ${styles.black}` : `${styles.circle}`
      }
    >
      <div className={styles.text}>{text}</div>
    </div>
  );
};

export default Circle;
