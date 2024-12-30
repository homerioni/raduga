import SearchIcon from '../../../icons/SearchIcon';
import styles from './styles.module.scss';

const HeaderSearch = () => (
  <>
    <form className={`${styles.searchForm} desktop`}>
      <label className={styles.search}>
        <input type="text" placeholder="Что хотите найти?" name="ra-search" />
      </label>
      <button type="submit">
        <SearchIcon />
      </button>
    </form>
    <button className={`${styles.searchBtn} mobile`} type="button">
      <SearchIcon />
    </button>
  </>
);
export default HeaderSearch;
