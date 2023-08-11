import React from 'react';
import styles from './Menu.module.scss';
import MenuList from '../../components/MenuList/MenuList';
import image2 from 'src/images/Image1.jpg';
import image1 from 'src/images/Image2.jpg';

const Menu = ({}) => {
  return (
    <div className={styles.menu}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.left_side}>
            <MenuList
              title={'Woensdag 12/01'}
              firstDescription={'Salade met Serrano'}
              secondDescription={'Steak Tartaar'}
            />
            <MenuList
              title={'Donderdag 13/01'}
              firstDescription={'Toast Roquefort'}
              secondDescription={'Penne met Kip en Prei'}
            />
            <MenuList
              title={'Vrijdag 14/01'}
              firstDescription={'Verrassing van de Chef'}
              secondDescription={'Penne met Kip en Prei'}
            />
            <MenuList
              title={'Vrijdag 15/01'}
              firstDescription={'Verrassing van de Chef'}
              secondDescription={'Penne met Kip en Prei'}
            />
            <MenuList
              title={'Vrijdag 16/01'}
              firstDescription={'Verrassing van de Chef'}
              secondDescription={'Penne met Kip en Prei'}
            />
          </div>
          <div className={styles.right_side}>
            <div className={styles.image1}>
              <img src={image1} />
            </div>
            <div className={styles.image2}>
              <img src={image2} />
            </div>
            <div className={styles.rectangle}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
