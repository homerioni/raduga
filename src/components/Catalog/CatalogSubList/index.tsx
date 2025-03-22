import { useState } from 'react';
import { TGetCategoriesResponse } from '../../../types';
import BackBtn from '../BackBtn';
import CatalogLink from '../CatalogLink';
import s from './styles.module.scss';

type TCatalogSubListProps = {
  items: TGetCategoriesResponse[];
  prevLink: string;
  catalogClose: () => void;
  backAction: () => void;
};

const CatalogSubList = ({ items, prevLink, catalogClose, backAction }: TCatalogSubListProps) => {
  const [isClosing, setIsClosing] = useState(false);

  const onBack = () => {
    setIsClosing(true);
    setTimeout(() => backAction(), 200);
  };

  return (
    <div className={`${s.subCatalog} ${isClosing ? s.closing : ''}`}>
      <BackBtn onClick={onBack} />
      <ul className={s.subCatalogList}>
        {items.map((category, index) => (
          <li key={index} className={s.subCatalogItem}>
            <CatalogLink
              className={s.link}
              link={`${prevLink}/${category.linkName}`}
              title={category.name}
              onClick={catalogClose}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CatalogSubList;
