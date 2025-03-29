'use client';

import { useState } from 'react';
import { TGetCategoriesResponse } from '../../../../types';
import BackBtn from '../BackBtn';
import CatalogLink from '../CatalogLink';
import CatalogSubList from '../CatalogSubList';
import s from './styles.module.scss';

type TCatalogListProps = {
  items: TGetCategoriesResponse[];
  prevLink: string;
  catalogClose: () => void;
  backAction: () => void;
};

const CatalogList = ({ items, prevLink, catalogClose, backAction }: TCatalogListProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const [isClosing, setIsClosing] = useState(false);

  const onBack = () => {
    setIsClosing(true);
    setTimeout(() => backAction(), 200);
  };

  return (
    <div className={`${s.catalog} ${isClosing ? s.closing : ''}`}>
      <BackBtn onClick={onBack} />
      <ul className={s.catalogList}>
        {items.map((category) => {
          const link = `${prevLink}/${category.linkName}`;

          return (
            <li
              key={category.id}
              className={`${s.catalogItem} ${category.children.length ? s.hasItems : ''}`}
              onClick={() =>
                window.innerWidth < 768 && category.children.length && setActiveIndex(category.id)
              }
            >
              <CatalogLink
                className={s.catalogItemLink}
                link={link}
                title={category.name}
                imageSrc={category.imageUrl}
                imageAlt={category.imageUrl}
                onClick={catalogClose}
              />
              {(activeIndex === category.id || window.innerWidth >= 768) && (
                <CatalogSubList
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
    </div>
  );
};

export default CatalogList;
