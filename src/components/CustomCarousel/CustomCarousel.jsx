import React, { useState } from 'react';
import styles from './CustomCarousel.module.scss';
import src1 from 'src/images/Image6.png';
import src2 from 'src/images/Image3.jpg';
import src3 from 'src/images/Image4.jpg';

const CustomCarousel = ({}) => {
  const [images, setImages] = useState([src1, src1, src1]);

  const handlePrev = () => {
    const shiftedArr = [...images];
    const firstItem = shiftedArr.shift();
    shiftedArr.push(firstItem);
    setImages(shiftedArr);
  };
  const handleNext = () => {
    const shiftedArr = images.slice(-1).concat(images.slice(0, -1));
    setImages(shiftedArr);
  };

  return (
    <div className={styles.customCarousel}>
      <div className={styles.buttons}>
        <button onClick={handlePrev} className={styles.button}>
          Prev
        </button>
        <button onClick={handleNext} className={styles.button}>
          Next
        </button>
      </div>
      {images.map((image) => (
        <img src={image} className={styles.image} />
      ))}
    </div>
  );
};

export default CustomCarousel;
