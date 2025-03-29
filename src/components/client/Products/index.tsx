import { Product as TProduct } from '@prisma/client';
import { ProductItem } from '../ProductItem';
import s from './styles.module.scss';

type TProductsProps = {
  products: TProduct[];
};

export const Products = ({ products }: TProductsProps) => (
  <div className={s.main}>
    {!products.length && <h3 className={s.empty}>Ничего не найдено</h3>}
    {products.map((product) => (
      <ProductItem key={product.id} {...product} />
    ))}
  </div>
);
