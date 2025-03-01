'use client';

import { useState } from 'react';
import CatalogLink from './CatalogLink';
import CatalogList from './CatalogList';
import { menuItems } from './constants';
import s from './styles.module.scss';

type TCatalogProps = {
  isOpenCatalog: boolean | string;
};

const Catalog = ({ isOpenCatalog }: TCatalogProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  if (!isOpenCatalog) {
    return null;
  }

  return (
    <div className={`${s.main} ${isOpenCatalog === true ? s.active : ''}`}>
      <nav className={`${s.container} container`}>
        <ul className={s.menuList}>
          {menuItems.map((item, index) => {
            const hasItems = !!item.items.length;

            return (
              <li
                key={index}
                className={`${s.menuItem} ${
                  activeIndex === index ? s.active : ''
                } ${hasItems ? s.hasItems : ''}`}
                onMouseEnter={() =>
                  window.innerWidth >= 768 && hasItems && setActiveIndex(index)
                }
                onClick={() =>
                  window.innerWidth < 768 && hasItems && setActiveIndex(index)
                }
              >
                <CatalogLink
                  link={item.href}
                  title={item.title}
                  className={s.menuItemLink}
                  imageSrc={item.imgSrc}
                  imageAlt={item.imgAlt}
                />
                {hasItems && activeIndex === index && (
                  <CatalogList
                    items={item.items}
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

export default Catalog;
