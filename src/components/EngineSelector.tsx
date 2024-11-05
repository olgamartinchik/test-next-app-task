import { FC } from 'react';
import { Engines } from '../types/types';
import Button from './Button';
import styles from '@styles/components/Button.module.scss';

const EngineSelector: FC = () => {
  return (
    <div className={`${styles.container} ${styles.hidden}`}>
      {Object.values(Engines).map((engine) => (
        <Button
          className={styles.filterBtn}
          key={engine}
          text={`${engine}л.`}
        />
      ))}
    </div>
  );
};

export default EngineSelector;
