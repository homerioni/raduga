import SearchIcon from '../../../icons/SearchIcon';
import s from './styles.module.scss';

const HeaderSearch = () => (
  <>
    <form
      className={`${s.searchForm} desktop`}
      style={{ visibility: 'hidden' }}
    >
      <label className={s.search}>
        <input type="text" placeholder="Что хотите найти?" name="ra-search" />
      </label>
      <button type="submit">
        <SearchIcon />
      </button>
    </form>
    <button className={`${s.searchBtn} mobile`} type="button">
      <SearchIcon />
    </button>
  </>
);
export default HeaderSearch;
