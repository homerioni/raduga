import { Prisma } from '@prisma/client';
import { Product } from '../Product';
import s from './styles.module.scss';

type TProductsProps = {
  products: Prisma.ProductGroupByOutputType[];
};

export const Products = ({ products }: TProductsProps) => (
  <div className={s.main}>
    {products.map((product) => (
      <Product key={product.id} {...product} />
    ))}
  </div>
);
