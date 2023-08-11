import React from 'react';
import styles from './Carousel.module.scss';
import SvgSelector from '../../components/SvgSelector/SvgSelector';

const Carousel = ({}) => {
  return (
    <div className={styles.Carousel}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.description}>
            <div className={styles.title}>Sfeerfoto's</div>
            <div className={styles.text}>
              De beste manier om de sfeer te ervaren is eens langskomen. In
              tussentijd hebben we hier alvast wat foto’s voor je klaar.
            </div>
          </div>
          <div className={styles.arrows}>
            <SvgSelector id={'arrow_left'} className={styles.arrow_left} />
            <SvgSelector id={'arrow_right'} className={styles.arrow_right} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
