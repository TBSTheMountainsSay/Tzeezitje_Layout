import React, { useState } from 'react';
import styles from './Footer.module.scss';
import Contact from '../../components/Contact/Contact';
import Button from '../../components/Button/Button';
import ModalSend from '../../components/ModalSend/ModalSend';

const Footer = ({}) => {
  const [nameTextArea, setNameTextArea] = useState('');
  const [emailTextArea, setEmailTextArea] = useState('');
  const [requestTextArea, setRequestTextArea] = useState('');
  const [isModalActive, setIsModalActive] = useState(false);

  const handleChangeName = (e) => {
    setNameTextArea(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmailTextArea(e.target.value);
  };

  const handleChangeRequest = (e) => {
    setRequestTextArea(e.target.value);
  };

  const handleActive = () => {
    setIsModalActive(!isModalActive);
  };

  const handleClear = () => {
    setNameTextArea('');
    setEmailTextArea('');
    setRequestTextArea('');
  };

  return (
    <div className={styles.footer}>
      <div className={styles.communication}>
        <div className={styles.contacts}>
          <div className={styles.title}>Contacts</div>
          <Contact
            id={'phone'}
            title={'Phone Number'}
            text={'+32 9 282 57 25'}
          />
          <Contact id={'email'} title={'Email'} text={'info@email.com'} />
          <Contact
            id={'time'}
            title={'Opening Hours'}
            text={'Everyday from 6 AM - 9 PM'}
          />
          <Contact
            id={'photo'}
            title={'Map Street'}
            text={'Bonenstraat 17, Oostende'}
          />
        </div>
        <div className={styles.questions}>
          <div className={styles.title}>have any questions?</div>
          <div className={styles.forms}>
            <div className={styles.firstInputs}>
              <div className={styles.form}>
                <div className={styles.input_title}>Name</div>

                <div className={styles.firstInputs_input}>
                  <textarea
                    placeholder={'Input your name'}
                    className={styles.textarea_horizontal}
                    value={nameTextArea}
                    onChange={handleChangeName}
                  />
                </div>
              </div>
              <div className={styles.form}>
                <div className={styles.input_title}>Email </div>
                <div className={styles.firstInputs_input}>
                  <textarea
                    placeholder={'Input your email'}
                    className={styles.textarea_horizontal}
                    value={emailTextArea}
                    onChange={handleChangeEmail}
                  />
                </div>
              </div>
            </div>
            <div className={styles.thirdInput}>
              <div className={styles.input_title}>Speciale Request</div>

              <div className={styles.thirdInput_input}>
                <textarea
                  placeholder={'Input your special request'}
                  className={styles.textarea_third}
                  value={requestTextArea}
                  onChange={handleChangeRequest}
                />
              </div>
            </div>
            <div onClick={handleActive}>
              <Button title={'Send'} />
            </div>
            <div
              className={
                isModalActive === true ? styles.modal : styles.modal_disable
              }
            >
              {nameTextArea === '' ||
              emailTextArea === '' ||
              requestTextArea === '' ? (
                <ModalSend
                  text={`Please fill in all fields.`}
                  onClick={handleActive}
                />
              ) : (
                <ModalSend
                  text={` Hello, ${nameTextArea}, thank you for your feedback! We are very pleased
        that you liked the cuisine of our restaurant. We will review your
        question and send you an answer to your email: ${emailTextArea}.`}
                  onClick={handleActive}
                  onLaterClick={handleClear}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
