'use client';

import { useState } from 'react';
import { Catalog } from '../Catalog';
import { CatalogBtn } from '../../ui/CatalogBtn';
import { HeaderContacts } from './HeaderContacts';
import { HeaderLogo } from './HeaderLogo';
import { HeaderSearch } from './HeaderSearch';
import s from './styles.module.scss';

export const Header = () => {
  const [isOpenCatalog, setIsOpenCatalog] = useState<boolean | string>(false);

  const toggleIsOpenCatalog = () => {
    if (isOpenCatalog) {
      setIsOpenCatalog('closing');

      const timerId = setTimeout(() => {
        setIsOpenCatalog(false);
        clearTimeout(timerId);
      }, 200);
    } else {
      setIsOpenCatalog('opening');

      const timerId = setTimeout(() => {
        setIsOpenCatalog(true);
        clearTimeout(timerId);
      });
    }
  };

  return (
    <>
      <header className={s.header}>
        <div className="container">
          <HeaderLogo />
          <CatalogBtn onClick={toggleIsOpenCatalog} isOpenCatalog={isOpenCatalog} />
          <HeaderSearch />
          <HeaderContacts />
        </div>
      </header>
      <Catalog isOpenCatalog={isOpenCatalog} catalogClose={() => setIsOpenCatalog(false)} />
    </>
  );
};
