import { Product as TProduct } from '@prisma/client';
import { ProductItem } from '../ProductItem';
import s from './styles.module.scss';

type TProductsPreviewProps = {
  title: string;
  products: TProduct[];
};

export const ProductsPreview = ({ products, title }: TProductsPreviewProps) => (
  <section>
    <div className="container">
      <h2 className={s.title}>{title}</h2>
      <ul className={s.list}>
        {products.map((product) => (
          <ProductItem key={product.id} {...product} />
        ))}
      </ul>
    </div>
  </section>
);
