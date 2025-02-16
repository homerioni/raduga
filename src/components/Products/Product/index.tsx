import { JSX } from 'react';
import Image from 'next/image';
import s from './styles.module.scss';

type TProductProps = {
  tag?: keyof JSX.IntrinsicElements;
};

export const Product = ({ tag: WrapperTag = 'div' }: TProductProps) => {
  return (
    <WrapperTag className={s.main}>
      <div className={s.img}>
        <Image src="/img/test.jpg" alt="" width={400} height={400} />
      </div>
      <p className={`${s.stock} ${s.active}`}>В наличии</p>
      <h2 className={s.title}>Дырокол большой текст наверное больше</h2>
      <p className={s.price}>
        <span>4.20 руб</span>
        <span>5.25 руб</span>
      </p>
    </WrapperTag>
  );
};
