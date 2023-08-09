import React from 'react';
import Background from 'src/images/Background.jpg';
import styles from './Header.module.scss';
import Logo from 'src/images/Logo.png';
import SvgSelector from '../../components/SvgSelector/SvgSelector';
import Button from '../../components/Button/Button';

const Header = () => {
  return (
    <div className={styles.main}>
      <div className={styles.img}>
        <img src={Background} />
      </div>
      <div className="container">
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
              <SvgSelector id={'phone'} />
              +32 9 282 57 25
            </div>
          </div>
          <div className={styles.container_info}>
            <div className={styles.container_open}>OPEN EVERYDAY 6AM - 9PM</div>
            <div className={styles.container_title}>
              A bad day with lunch is better than a good day without it.
            </div>
          </div>
          <div className={styles.button}>
            <Button title={'Reserve a table'} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
