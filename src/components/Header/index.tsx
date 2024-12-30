import CatalogBtn from '../ui/CatalogBtn';
import HeaderContacts from './HeaderContacts';
import HeaderLogo from './HeaderLogo';
import HeaderSearch from './HeaderSearch';
import styles from './styles.module.scss';

const Header = () => (
  <header className={styles.header}>
    <div className="container">
      <HeaderLogo />
      <CatalogBtn />
      <HeaderSearch />
      <HeaderContacts />
    </div>
  </header>
);

export default Header;
