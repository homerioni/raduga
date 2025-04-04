import Image from 'next/image';
import Link from 'next/link';
import { Product as TProduct } from '@prisma/client';
import { routes } from '../../../constants';
import s from './styles.module.scss';

export const ProductItem = ({
  id,
  name,
  imageUrl,
  stock,
  price,
  fullPrice,
}: Omit<TProduct, 'description' | 'categoryId' | 'createdAt' | 'updateAt'>) => {
  const stockClassName = stock !== null ? [s.disable, s.active][+stock] : '';
  const stockText = stock !== null ? ['Нет в наличии', 'В наличии'][+stock] : 'Наличие уточняйте';

  return (
    <Link href={`${routes.product}/${id}`} className={s.main}>
      <div className={s.img}>
        <Image src={imageUrl} alt="" width={400} height={400} />
      </div>
      <p className={`${s.stock} ${stockClassName}`}>{stockText}</p>
      <h2 className={s.title}>{name}</h2>
      <p className={s.price}>
        {+price ? <span>{+price} руб</span> : <span>Цену уточняйте</span>}
        {fullPrice && <span>{+fullPrice} руб</span>}
      </p>
    </Link>
  );
};
