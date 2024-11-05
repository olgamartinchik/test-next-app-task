import { FC } from 'react';
import { Brands } from '../types/types';
import Button from './Button';
import styles from '@styles/components/Button.module.scss';

type BrandSelectorProps = {
  onBrandSelect: (brand: Brands) => void;
  activeBrand: string;
};

const BrandSelector: FC<BrandSelectorProps> = ({
  onBrandSelect,
  activeBrand,
}) => {
  return (
    <div className={styles.container}>
      {Object.values(Brands).map((brand) => (
        <Button
          className={`${styles.filterBtn} ${
            activeBrand === brand ? styles.active : ''
          }`}
          key={brand}
          text={brand}
          onClick={() => onBrandSelect(brand)}
        />
      ))}
    </div>
  );
};

export default BrandSelector;
