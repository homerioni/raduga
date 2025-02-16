import { Category } from './Category';
import s from './styles.module.scss';

export const Categories = () => {
  return (
    <section className={s.main}>
      <div className={`${s.wrapper} container`}>
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
      </div>
      <button className={`${s.showBtn} mobile`} type="button">
        Показать все категории
      </button>
    </section>
  );
};
