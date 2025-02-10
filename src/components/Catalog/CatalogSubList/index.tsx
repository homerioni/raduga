import { useState } from 'react';
import BackBtn from '../BackBtn';
import CatalogLink from '../CatalogLink';
import { TCatalogLink } from '../types';
import s from './styles.module.scss';

type TCatalogSubListProps = {
  items: TCatalogLink[];
  backAction: () => void;
};

const CatalogSubList = ({ items, backAction }: TCatalogSubListProps) => {
  const [isClosing, setIsClosing] = useState(false);

  const onBack = () => {
    setIsClosing(true);
    setTimeout(() => backAction(), 200);
  };

  return (
    <div className={`${s.subCatalog} ${isClosing ? s.closing : ''}`}>
      <BackBtn onClick={onBack} />
      <ul className={s.subCatalogList}>
        {items.map((item, index) => (
          <li key={index} className={s.subCatalogItem}>
            <CatalogLink
              className={s.link}
              link={item.href}
              title={item.title}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CatalogSubList;
