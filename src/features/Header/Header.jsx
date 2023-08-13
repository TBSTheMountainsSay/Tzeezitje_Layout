import React, { useState } from 'react';
import styles from './Header.module.scss';
import Logo from 'src/images/Logo.png';
import SvgSelector from '../../components/SvgSelector/SvgSelector';
import Button from '../../components/Button/Button';
import Circle from '../../components/Circle/Circle';
import MenuAdaptive from '../../components/MenuAdaptive/MenuAdaptive';

const Header = () => {
  const [isActiveMenu, setIsActiveMenu] = useState(false);

  const handleMenu = () => {
    setIsActiveMenu(!isActiveMenu);
  };

  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.logo}>
            <img src={Logo} />
          </div>
          <div className={styles.header_elements}>
            <div className={styles.header_element}>À la carte</div>
            <div className={styles.header_element}>Wijnkaart</div>
            <div className={styles.header_element}>Lunchmenu</div>
            <div className={styles.header_element}>Contact</div>
          </div>
          <div className={styles.header_contact}>
            <SvgSelector id={'phone'} className={styles.header_contact_svg} />
            +32 9 282 57 25
          </div>
          <button onClick={handleMenu}>
            <SvgSelector id={'burger'} className={styles.burger} />
          </button>
        </div>

        <div
          className={
            isActiveMenu === true
              ? styles.menuAdaptive
              : styles.menuAdaptive_disable
          }
        >
          <MenuAdaptive onClick={handleMenu} />
        </div>

        <div className={styles.container_info}>
          <div className={styles.container_open}>OPEN EVERYDAY 6AM - 9PM</div>
          <div className={styles.container_title}>
            A bad day with lunch is better than a good day without it.
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.button}>
            <Button title={'Reserve a table'} />
          </div>
          <div className={styles.circles}>
            <Circle text={'Fb'} />
            <Circle text={'lg'} />
            <Circle text={'Tw'} />
            <Circle text={'Yt'} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
