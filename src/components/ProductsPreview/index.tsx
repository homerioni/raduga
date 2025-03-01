import { Prisma } from '@prisma/client';
import { Product } from '../Product';
import s from './styles.module.scss';

type TProductsPreviewProps = {
  products: Prisma.ProductGroupByOutputType[];
};

export const ProductsPreview = ({ products }: TProductsPreviewProps) => (
  <section>
    <div className="container">
      <h2 className={s.title}>Популярные товары</h2>
      <ul className={s.list}>
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </ul>
    </div>
  </section>
);
