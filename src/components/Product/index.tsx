import Image from 'next/image';
import Link from 'next/link';
import { Prisma } from '@prisma/client';
import s from './styles.module.scss';

export const Product = ({
  id,
  name,
  imageUrl,
  stock,
  price,
  discountPrice,
}: Prisma.ProductGroupByOutputType) => {
  const stockClassName = stock !== null ? [s.disable, s.active][+stock] : '';
  const stockText = stock !== null ? ['Нет в наличии', 'В наличии'][+stock] : '';

  return (
    <Link href={`/product/${id}`} className={s.main}>
      <div className={s.img}>
        <Image src={imageUrl} alt="" width={400} height={400} />
      </div>
      <p className={`${s.stock} ${stockClassName}`}>{stockText}</p>
      <h2 className={s.title}>{name}</h2>
      <p className={s.price}>
        <span>{price / 100} руб</span>
        {discountPrice && <span>{discountPrice / 100} руб</span>}
      </p>
    </Link>
  );
};
