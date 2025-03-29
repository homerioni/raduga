import Link from 'next/link';
import { TGetCategoriesResponse } from '../../../types';
import s from './styles.module.scss';

type TCatalogTitleWrapperProps = {
  title: string;
  pathName?: string;
  subCategories?: TGetCategoriesResponse[];
};

export const CatalogTitleWrapper = ({
  title,
  pathName = '',
  subCategories = [],
}: TCatalogTitleWrapperProps) => (
  <div className={s.main}>
    <h1 className={s.title}>{title}</h1>
    <div className={s.categories}>
      {subCategories?.map((category) => (
        <Link key={category.id} href={`${pathName}/${category.linkName}`} className={s.category}>
          {category.name}
        </Link>
      ))}
    </div>
  </div>
);
