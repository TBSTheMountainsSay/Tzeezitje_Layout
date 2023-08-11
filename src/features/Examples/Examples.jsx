import React from 'react';
import styles from './Examples.module.scss';
import Example from '../../components/Example/Example';
import image3 from '../../images/Image3.jpg';
import image4 from '../../images/Image4.jpg';
import image5 from '../../images/Image5.jpg';

const Examples = ({}) => {
  return (
    <div className={styles.examples}>
      <div className="container">
        <div className={styles.example_item}>
          <Example
            title={'LEKKER ETEN'}
            text={
              'Eten gaat niet over indruk maken op mensen. Het gaat erom dat ze zich op hun gemak voelen. Dat is onze filosofie, goed eten in een goede sfeer.'
            }
            src={image3}
          />
          <Example
            title={'TOFFE AMBIANCE'}
            text={
              'Het creëren van de juiste sfeer is zeer belangrijk voor ons. We nemen onze tijd om te zorgen dat alle elementen bijdragen aan de juiste setting.'
            }
            src={image4}
            reverse={true}
          />
          <Example
            title={'LEKKERE COCKTAILS'}
            text={
              'Ons doel is simpel: een gastvrije plek bieden waar u kunt genieten van een onvergetelijke cocktail, een goed gesprek en lekker eten.'
            }
            src={image5}
          />
        </div>
      </div>
    </div>
  );
};

export default Examples;
