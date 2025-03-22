import Image from 'next/image';
import Link from 'next/link';
import s from './styles.module.scss';

export const HeaderLogo = () => (
  <Link href="/" className={s.logo}>
    <Image src="/img/logo.svg" alt="" width={100} height={70} />
    <span>
      <span>Книжный магазин</span>
      <span>Радуга</span>
    </span>
  </Link>
);
