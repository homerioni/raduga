import Link from 'next/link';
import MapIcon from '../../../icons/MapIcon';
import PhoneIcon from '../../../icons/PhoneIcon';
import styles from './styles.module.scss';

const HeaderContacts = () => (
  <div className={styles.contacts}>
    <Link href="tel:375291802283" className={`${styles.phone} desktop`}>
      <PhoneIcon />
      <span>+375 (29) 180-22-83</span>
    </Link>
    <Link href="#map" className={styles.address}>
      <MapIcon />
      <span>г. Речица, ул. Снежкова 16а</span>
    </Link>
  </div>
);

export default HeaderContacts;
