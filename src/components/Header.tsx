import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import styles from '@styles/components/Header.module.scss';

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Link href={`/`}>
        <Image src='/logo.svg' alt='Logo' width={154} height={42} priority />
      </Link>
    </header>
  );
};
export default Header;
