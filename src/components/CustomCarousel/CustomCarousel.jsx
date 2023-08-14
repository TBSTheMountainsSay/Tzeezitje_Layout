import React, { useState } from 'react';
import styles from './CustomCarousel.module.scss';
import src1 from 'src/images/Image6.png';
import src2 from 'src/images/Image7.png';
import src3 from 'src/images/Image9.png';
import SvgSelector from '../SvgSelector/SvgSelector';

const CustomCarousel = ({}) => {
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
    <div className={styles.customCarousel}>
      <div className={styles.wrapper}>
        <div className={styles.buttons}>
          <button onClick={handlePrev}>
            <SvgSelector id={'arrow_left'} className={styles.arrow_left} />
          </button>
          <button onClick={handleNext}>
            <SvgSelector id={'arrow_right'} className={styles.arrow_right} />
          </button>
        </div>
        {images.map((image) => (
          <img src={image} className={styles.image} />
        ))}
      </div>
    </div>
  );
};

export default CustomCarousel;
