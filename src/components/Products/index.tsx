import { Product } from '../Product';
import s from './styles.module.scss';

export const Products = () => (
  <div className={s.main}>
    {Array.from({ length: 20 }, (_, i) => (
      <Product key={i} />
    ))}
  </div>
);
