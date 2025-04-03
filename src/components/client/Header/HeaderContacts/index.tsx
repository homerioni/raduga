import Link from 'next/link';
import { InstagramIcon, MapIcon } from '../../../icons';
import s from './styles.module.scss';

export const HeaderContacts = () => (
  <div className={s.contacts}>
    <Link
      href="https://www.instagram.com/book_shop_rainbow/"
      target="_blank"
      className={`${s.phone} desktop`}
    >
      <InstagramIcon />
      <span>@book_shop_rainbow</span>
    </Link>
    <Link href="#map" className={s.address}>
      <MapIcon />
      <span>г. Речица, ул. Снежкова 16а</span>
    </Link>
  </div>
);
