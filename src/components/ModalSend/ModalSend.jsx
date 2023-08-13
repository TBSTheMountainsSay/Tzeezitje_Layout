import React from 'react';
import styles from './ModalSend.module.scss';
import Button from '../Button/Button';

const ModalSend = ({ text, onClick, onLaterClick }) => {
  return (
    <div className={styles.modal_send}>
      <div className={styles.text}>{text}</div>
      <div className={styles.close}>
        {onLaterClick ? (
          <Button
            title={'Close'}
            onClick={() => {
              onClick();
              onLaterClick();
            }}
          />
        ) : (
          <Button title={'Close'} onClick={onClick} />
        )}
      </div>
    </div>
  );
};

export default ModalSend;
