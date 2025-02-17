import { Product } from '../Product';
import s from './styles.module.scss';

export const ProductsPreview = () => {
  return (
    <section>
      <div className="container">
        <h2 className={s.title}>Популярные товары</h2>
        <ul className={s.list}>
          <Product tag="li" />
          <Product tag="li" />
          <Product tag="li" />
          <Product tag="li" />
          <Product tag="li" />
          <Product tag="li" />
          <Product tag="li" />
          <Product tag="li" />
          <Product tag="li" />
          <Product tag="li" />
        </ul>
      </div>
    </section>
  );
};
