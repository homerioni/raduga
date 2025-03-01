import Link from 'next/link';
import s from './styles.module.scss';

export const CatalogTitleWrapper = () => (
  <div className={s.main}>
    <h1 className={s.title}>Название категории</h1>
    <div className={s.categories}>
      <Link href="/" className={s.category}>
        Подкатегория 1
      </Link>
      <Link href="/" className={s.category}>
        Подкатегория 2
      </Link>
      <Link href="/" className={s.category}>
        Подкатегория 3
      </Link>
      <Link href="/" className={s.category}>
        Подкатегория 4
      </Link>
    </div>
  </div>
);
