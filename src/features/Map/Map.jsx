import React from 'react';
import styles from './Map.module.scss';
import Circle from '../../components/Circle/Circle';
import logo from 'src/images/Logo2.png';

const Map = ({}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.map}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7066.252491815148!2d2.9195992661794063!3d51.232015159746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dca929815cb8ad%3A0xddc6cefde1cad562!2sBistrot%20&#39;t%20Zeezotje!5e0!3m2!1sru!2sru!4v1691848703833!5m2!1sru!2sru"></iframe>
      </div>
      <div className={styles.logos}>
        <div className={styles.img}>
          <img src={logo} />
        </div>
        <div className={styles.circles}>
          <Circle black={true} text={'Fb'} />
          <Circle black={true} text={'lg'} />
          <Circle black={true} text={'Tw'} />
          <Circle black={true} text={'Yt'} />
        </div>
      </div>
    </div>
  );
};

export default Map;
