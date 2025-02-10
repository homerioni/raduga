'use client';

import { useState } from 'react';
import BackBtn from '../BackBtn';
import CatalogLink from '../CatalogLink';
import CatalogSubList from '../CatalogSubList';
import { TCatalogItem } from '../types';
import s from './styles.module.scss';

type TCatalogListProps = {
  items: TCatalogItem[];
  backAction: () => void;
};

const CatalogList = ({ items, backAction }: TCatalogListProps) => {
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
        {items.map((item, index) => (
          <li
            key={index}
            className={`${s.catalogItem} ${
              item.subItems.length ? s.hasItems : ''
            }`}
            onClick={() =>
              window.innerWidth < 768 &&
              item.subItems.length &&
              setActiveIndex(index)
            }
          >
            <CatalogLink
              className={s.catalogItemLink}
              link={item.href}
              title={item.title}
              imageSrc={item.imgSrc}
              imageAlt={item.imgAlt}
            />
            {(activeIndex === index || window.innerWidth >= 768) && (
              <CatalogSubList
                items={item.subItems}
                backAction={() => setActiveIndex(null)}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CatalogList;
