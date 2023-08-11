import React from 'react';
import styles from './Specification.module.scss';
import SvgSelector from '../../components/SvgSelector/SvgSelector';

const Specification = ({}) => {
  return (
    <div className={styles.specification}>
      <div className={styles.titles}>
        <SvgSelector id={'quotes'} className={styles.quotes} />
        <div className={styles.title_first}>
          Goede service, lekker eten, toffe ambiance
        </div>
        <div className={styles.title_second}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren.
        </div>
        <div className={styles.title_third}>ALAIN HEYNDRICKX</div>
      </div>
    </div>
  );
};

export default Specification;
