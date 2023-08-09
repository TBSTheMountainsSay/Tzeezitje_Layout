import React from 'react';
import styles from './Button.module.scss';

const Button = ({ title }) => {
  return (
    <div className={styles.button}>
      <button>{title}</button>
    </div>
  );
};

export default Button;
