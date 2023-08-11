import React from 'react';
import styles from './MenuList.module.scss';

const MenuList = ({ title, firstDescription, secondDescription }) => {
  return (
    <div className={styles.menu_list}>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>
        <div className={styles.description_title}>{firstDescription}</div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.description_title}>{secondDescription}</div>
      </div>
      <div>
        <hr className={styles.line} />
      </div>
    </div>
  );
};

export default MenuList;
