import Link from 'next/link';
import s from './styles.module.scss';

type TPaginationProps = {
  qtyPages: number;
  activePage: number;
  searchParams: { [key: string]: string | undefined };
};

export const Pagination = ({ qtyPages, activePage, searchParams }: TPaginationProps) => {
  const arr: (string | number)[] =
    qtyPages <= 5
      ? Array.from({ length: qtyPages }, (_, i) => i + 1)
      : Array.from({ length: 5 }, (_, i) => {
          const pageNum = Math.max(Math.min(activePage, qtyPages - 2), 3);
          return pageNum - 2 + i;
        });

  if (qtyPages > 5 && arr[0] !== 1) {
    arr[0] = '...';
    arr.unshift(1);
  }

  if (qtyPages > 5 && arr[arr.length - 1] !== qtyPages) {
    arr[arr.length - 1] = '...';
    arr.push(qtyPages);
  }

  return (
    <div className={s.pagination}>
      {arr.map((page, i) =>
        typeof page === 'number' ? (
          <Link
            key={i}
            href={{ query: { ...searchParams, page } }}
            className={activePage === page ? s.active : ''}
          >
            {page}
          </Link>
        ) : (
          <span key={i}>{page}</span>
        )
      )}
    </div>
  );
};
