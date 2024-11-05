import { FC } from 'react';
import { CarResponse } from '../types/types';
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';
import { DETAILED_BTN_TEXT } from '../constants/constants';
import styles from '@styles/components/Card.module.scss';

const Card: FC<{ car: CarResponse }> = ({ car }) => {
  return (
    <div className={styles.container}>
      <Image
        className={styles.image}
        src={car.photos.imgs[0].url}
        alt={car.brandName}
        width={440}
        height={292}
        priority
      />
      <h3>
        {car.brandName} {car.modelName}
      </h3>
      <h4>
        {car.modificationName
          .replace(' л. ', ' / ')
          .replace(' л.с. ', ' л.с. / ')}
      </h4>
      <Link href={`/cars/${car.brandName}-${car.car_id}`}>
        <Button className={styles.button} text={DETAILED_BTN_TEXT} />
      </Link>
    </div>
  );
};
export default Card;
