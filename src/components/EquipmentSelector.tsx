import { FC } from 'react';
import { Equipments } from '../types/types';
import Button from './Button';
import styles from '@styles/components/Button.module.scss';

const EquipmentSelector: FC = () => {
  return (
    <div className={styles.container}>
      {Object.values(Equipments).map((equipment) => (
        <Button className={styles.filterBtn} key={equipment} text={equipment} />
      ))}
    </div>
  );
};

export default EquipmentSelector;
