import { getCategories } from '../../../services/categories';
import { Category } from './Category';
import s from './styles.module.scss';

export const Categories = async () => {
  const categories = await getCategories();

  return (
    <section className={s.main}>
      <div className={`${s.wrapper} container`}>
        {categories.map((category) => (
          <Category key={category.id} {...category} childrenCategory={category.children} />
        ))}
      </div>
      <button className={`${s.showBtn} mobile`} type="button">
        Показать все категории
      </button>
    </section>
  );
};
