import React from 'react';
import styles from './Example.module.scss';
import clsx from 'clsx';

const Example = ({ title, text, src, reverse }) => {
  return (
    <div
      className={clsx(styles.example, {
        [styles.example_reverse]: reverse,
      })}
    >
      <div className={styles.first_side}>
        <div className={styles.title}>{title}</div>
        <hr className={styles.line} />
        <div className={styles.text}>{text}</div>
      </div>
      <div className={styles.second_side}>
        <img src={src} className={styles.image} />
      </div>
    </div>
  );
};

export default Example;
