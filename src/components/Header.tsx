import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import styles from '@styles/components/Header.module.scss';

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Link href={`/`}>
        <Image
          className={styles.image}
          src='/logo.svg'
          alt='Logo'
          width={154}
          height={42}
          priority
        />
      </Link>
      <div className={styles.separator}></div>
      <p>Официальный дилер Максимум</p>
    </header>
  );
};
export default Header;
