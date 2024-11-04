'use client';
import { Brands, CarResponse } from '../types/types';
import { FC, useState } from 'react';
import Card from './Card';
import Button from './Button';
import { fetchCarsByBrand } from '@utils/fetchData';

type CarGalleryProps = {
  initialCars: CarResponse[];
};

const CarGallery: FC<CarGalleryProps> = ({ initialCars }) => {
  const [cars, setCars] = useState<CarResponse[]>(initialCars);
  const handleBrandSelect = (brand: Brands) => {
    fetchCarsByBrand(brand).then((value) => setCars(value));
  };

  return (
    <div>
      <div>
        {Object.values(Brands).map((brand) => (
          <Button
            key={brand}
            text={brand}
            onClick={() => handleBrandSelect(brand)}
          />
        ))}
      </div>
      <div>
        {cars.map((car) => (
          <Card key={car.car_id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default CarGallery;
