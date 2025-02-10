import Link from 'next/link';
import MapIcon from '../../../icons/MapIcon';
import PhoneIcon from '../../../icons/PhoneIcon';
import s from './styles.module.scss';

const HeaderContacts = () => (
  <div className={s.contacts}>
    <Link href="tel:375291802283" className={`${s.phone} desktop`}>
      <PhoneIcon />
      <span>+375 (29) 180-22-83</span>
    </Link>
    <Link href="#map" className={s.address}>
      <MapIcon />
      <span>г. Речица, ул. Снежкова 16а</span>
    </Link>
  </div>
);

export default HeaderContacts;
