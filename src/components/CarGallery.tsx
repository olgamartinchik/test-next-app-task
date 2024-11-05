'use client';
import { Brands, CarResponse, Engines, Equipments } from '../types/types';
import { FC, useState } from 'react';
import Card from './Card';
import Button from './Button';
import { fetchCarsByBrand } from '@utils/fetchData';
import { BASE_BRAND, RESET_BTN_TEXT } from '../constants/constants';
import style from '@styles/components/CarGallery.module.scss';
import BrandSelector from './BrandSelector';
import EngineSelector from './EngineSelector';
import EquipmentSelector from './EquipmentSelector';

type CarGalleryProps = {
  initialCars: CarResponse[];
};

const CarGallery: FC<CarGalleryProps> = ({ initialCars }) => {
  const [cars, setCars] = useState<CarResponse[]>(initialCars);
  const [brand, setCarsBrand] = useState<string>(BASE_BRAND);
  const handleBrandSelect = (brand: Brands) => {
    fetchCarsByBrand(brand).then((value) => setCars(value));
    setCarsBrand(brand);
  };

  return (
    <div className={style.wrapper}>
      <h1>Автомобили {brand} в СПБ</h1>
      <div className={style.container}>
        <div className={style.buttons}>
          <div className={style.group}>
            <h4 className={style.hidden}>Бренд</h4>
            <BrandSelector
              onBrandSelect={handleBrandSelect}
              activeBrand={brand}
            />
          </div>
          <div className={style.hidden}>
            <div className={style.group}>
              <h4>Объем двигателя</h4>
              <EngineSelector />
            </div>
            <div className={style.group}>
              <h4>Комплектация</h4>
              <EquipmentSelector />
            </div>
            <Button className={style.resetBtn} text={RESET_BTN_TEXT} />
          </div>
        </div>
        <div className={style.cards}>
          {cars.map((car) => (
            <Card key={car.car_id} car={car} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarGallery;
