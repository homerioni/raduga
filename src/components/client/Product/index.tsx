import Image from 'next/image';
import { Product as TProduct } from '@prisma/client';
import s from './styles.module.scss';

type TProductProps = {
  product: TProduct;
};

export const Product = ({ product }: TProductProps) => {
  const stockClassName = product.stock !== null ? [s.disable, s.active][+product.stock] : '';
  const stockText =
    product.stock !== null ? ['Нет в наличии', 'В наличии'][+product.stock] : 'Наличие уточняйте';

  return (
    <div className={s.main}>
      <div className={`${s.container}`}>
        <Image
          className={s.img}
          src={product.imageUrl}
          alt={product.imageUrl}
          width={600}
          height={600}
        />
        <div className={s.textWrapper}>
          <h1 className={s.title}>{product.name}</h1>
          <div className={s.priceBox}>
            <p className={`${s.stock} ${stockClassName}`}>{stockText}</p>
            <p className={s.price}>
              {+product.price ? <span>{+product.price} руб</span> : <span>Цену уточняйте</span>}
              {product.fullPrice && <span>{+product.fullPrice} руб</span>}
            </p>
          </div>
          <p className={s.description}>{product.description}</p>
        </div>
      </div>
    </div>
  );
};
