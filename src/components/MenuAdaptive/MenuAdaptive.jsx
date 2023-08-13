import React, { useState } from 'react';
import styles from './MenuAdaptive.module.scss';
import SvgSelector from '../SvgSelector/SvgSelector';

const MenuAdaptive = ({ onClick }) => {
  return (
    <div className={styles.menu}>
      <button className={styles.svg_wrapper} onClick={onClick}>
        <SvgSelector id={'close'} className={styles.svg} />
      </button>
      <div className={styles.menu_element}>À la carte</div>
      <div className={styles.menu_element}>Wijnkaart</div>
      <div className={styles.menu_element}>Lunchmenu</div>
      <div className={styles.menu_element}>Contact</div>
      <div className={styles.menu_element}>
        <SvgSelector id={'phone'} className={styles.menu_element_svg} />
        +32 9 282 57 25
      </div>
    </div>
  );
};

export default MenuAdaptive;
