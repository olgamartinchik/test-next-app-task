import { FC } from 'react';

import styles from '@styles/components/Footer.module.scss';
import Button from './Button';
import { DETAILED_BTN_TEXT } from '../constants/constants';

type FooterProps = {
  name: string;
};
const Footer: FC<FooterProps> = ({ name }) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.background}></div>
      <div className={styles.image}></div>

      <div className={styles.promo}>
        <h2>Кредит на новый {name}</h2>
        <p>
          Оформите кредит на любой автомобиль ассартимента диллерского центра
          &laquo;Максимум&raquo;
        </p>
        <Button className={styles.button} text={DETAILED_BTN_TEXT} />
      </div>
    </footer>
  );
};
export default Footer;
