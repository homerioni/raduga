import React from 'react';
import s from './styles.module.scss';

type TCatalogBtnProps = {
  onClick: () => void;
  isOpenCatalog: boolean | string;
};

const CatalogBtn = ({ onClick, isOpenCatalog }: TCatalogBtnProps) => (
  <button
    className={`${s.catalogBtn} ${isOpenCatalog === true ? s.active : ''}`}
    type="button"
    onClick={onClick}
  >
    <i />
    <span>Каталог</span>
  </button>
);

export default CatalogBtn;
