import Image from 'next/image';
import Link from 'next/link';
import s from './styles.module.scss';

export const Category = () => {
  return (
    <div className={s.main}>
      <div className={s.wrapper}>
        <Link href="#" className={s.img}>
          <Image src="/img/1.webp" alt="" width={400} height={400} />
        </Link>
        <Link href="#" className={s.name}>
          Рюкзаки
        </Link>
        <ul className={s.list}>
          <li className={s.listItem}>
            <Link href="#">Рюкзаки</Link>
          </li>
          <li className={s.listItem}>
            <Link href="#">Ранцы</Link>
          </li>
          <li className={s.listItem}>
            <Link href="#">Детские сумки</Link>
          </li>
          <li className={s.listItem}>
            <Link href="#">Рюкзаки</Link>
          </li>
          <li className={s.listItem}>
            <Link href="#">Ранцы</Link>
          </li>
          <li className={s.listItem}>
            <Link href="#">Детские сумки</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
