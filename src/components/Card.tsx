import { FC } from 'react';
import { CarResponse } from '../types/types';
import Image from 'next/image';
import Link from 'next/link';

const Card: FC<{ car: CarResponse }> = ({ car }) => {
  return (
    <div>
      <Link href={`/cars/${car.brandName}-${car.car_id}`}>
        <Image
          src={car.photos.imgs[0].url}
          alt={car.brandName}
          width={440}
          height={292}
          priority
        />
        <h3>{car.modelName}</h3>
      </Link>
    </div>
  );
};
export default Card;
