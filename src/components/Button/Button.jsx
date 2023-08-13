import React from 'react';
import styles from './Button.module.scss';

const Button = ({ title, onClick }) => {
  return (
    <div className={styles.button} onClick={onClick}>
      <button>{title}</button>
    </div>
  );
};

export default Button;
