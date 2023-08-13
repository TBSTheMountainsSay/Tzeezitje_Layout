import React from 'react';
import styles from './ModalSend.module.scss';
import Button from '../Button/Button';

const ModalSend = ({ nameTextArea, emailTextArea, onClick }) => {
  return (
    <div className={styles.modal_send}>
      <div className={styles.text}>
        {` Hello, ${nameTextArea}, thank you for your feedback! We are very pleased
        that you liked the cuisine of our restaurant. We will review your
        question and send you an answer to your email: ${emailTextArea}.`}
      </div>
      <div className={styles.close}>
        <Button title={'Close'} onClick={onClick} />
      </div>
    </div>
  );
};

export default ModalSend;
