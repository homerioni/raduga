'use client';

import { useLayoutEffect, useState } from 'react';
import { routes } from '../../constants/routes';
import { getCategories } from '../../services/categories';
import { TGetCategoriesResponse } from '../../types';
import CatalogLink from './CatalogLink';
import CatalogList from './CatalogList';
import s from './styles.module.scss';

type TCatalogProps = {
  isOpenCatalog: boolean | string;
  catalogClose: () => void;
};

export const Catalog = ({ isOpenCatalog, catalogClose }: TCatalogProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [categories, setCategories] = useState<TGetCategoriesResponse[]>([]);

  useLayoutEffect(() => {
    getCategories().then((res) => {
      setCategories(res);
    });
  }, []);

  if (!isOpenCatalog || !categories.length) {
    return null;
  }

  return (
    <div className={`${s.main} ${isOpenCatalog === true ? s.active : ''}`}>
      <nav className={`${s.container} container`}>
        <ul className={s.menuList}>
          {categories.map((category) => {
            const hasItems = !!category.children.length;
            const link = `${routes.catalog}/${category.linkName}`;

            return (
              <li
                key={category.id}
                className={`${s.menuItem} ${activeIndex === category.id ? s.active : ''} ${
                  hasItems ? s.hasItems : ''
                }`}
                onMouseEnter={() => window.innerWidth >= 768 && setActiveIndex(category.id)}
                onClick={() => window.innerWidth < 768 && setActiveIndex(category.id)}
              >
                <CatalogLink
                  link={link}
                  title={category.name}
                  className={s.menuItemLink}
                  imageSrc={category.imageUrl}
                  imageAlt={category.imageUrl}
                  onClick={catalogClose}
                />
                {hasItems && activeIndex === category.id && (
                  <CatalogList
                    items={category.children}
                    prevLink={link}
                    catalogClose={catalogClose}
                    backAction={() => setActiveIndex(null)}
                  />
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
