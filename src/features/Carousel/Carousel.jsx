import React, { useState } from 'react';
import styles from './Carousel.module.scss';
import SvgSelector from '../../components/SvgSelector/SvgSelector';
import src2 from '../../images/Image7.png';
import src1 from '../../images/Image6.png';
import src3 from '../../images/Image9.png';

const Carousel = ({}) => {
  const [images, setImages] = useState([src2, src1, src3]);

  const handlePrev = () => {
    const shiftedArr = images.slice(-1).concat(images.slice(0, -1));
    setImages(shiftedArr);
  };
  const handleNext = () => {
    const shiftedArr = [...images];
    const firstItem = shiftedArr.shift();
    shiftedArr.push(firstItem);
    setImages(shiftedArr);
  };
  return (
    <div className={styles.Carousel}>
      <div className={styles.wrapper}>
        <div className={styles.description}>
          <div className={styles.title}>Sfeerfoto's</div>
          <div className={styles.text}>
            De beste manier om de sfeer te ervaren is eens langskomen. In
            tussentijd hebben we hier alvast wat foto’s voor je klaar.
          </div>
        </div>
        <div className={styles.arrows}>
          <button onClick={handlePrev}>
            <SvgSelector id={'arrow_left'} className={styles.arrow_left} />
          </button>
          <button onClick={handleNext}>
            <SvgSelector id={'arrow_right'} className={styles.arrow_right} />
          </button>
        </div>
      </div>
      <div className={styles.customCarousel}>
        {images.map((image) => (
          <img src={image} className={styles.image} />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
