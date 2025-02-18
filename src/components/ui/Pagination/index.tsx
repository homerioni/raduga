import Link from 'next/link';
import s from './styles.module.scss';

export const Pagination = () => (
  <div className={s.pagination}>
    <Link href="/catalog" className={s.active}>
      1
    </Link>
    <Link href="/catalog">2</Link>
    <Link href="/catalog">3</Link>
    <span>...</span>
    <Link href="/catalog">6</Link>
  </div>
);
