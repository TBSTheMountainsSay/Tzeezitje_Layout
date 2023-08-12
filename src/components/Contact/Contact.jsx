import React from 'react';
import styles from './Contact.module.scss';
import SvgSelector from '../SvgSelector/SvgSelector';

const Contact = ({ id, title, text }) => {
  return (
    <div className={styles.contact}>
      <div className={styles.icon}>
        <SvgSelector id={id} className={styles.svg} />
      </div>
      <div className={styles.info}>
        <div className={styles.title}>{title}</div>
        <div className={styles.text}>{text}</div>
      </div>
    </div>
  );
};

export default Contact;
