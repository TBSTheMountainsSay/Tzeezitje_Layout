import React from 'react';
import styles from './Footer.module.scss';
import Contact from '../../components/Contact/Contact';
import Button from '../../components/Button/Button';

const Footer = ({}) => {
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
                  />
                </div>
              </div>
              <div className={styles.form}>
                <div className={styles.input_title}>Email </div>
                <div className={styles.firstInputs_input}>
                  <textarea
                    placeholder={'Input your email'}
                    className={styles.textarea_horizontal}
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
                />
              </div>
            </div>
            <Button title={'Send'} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
