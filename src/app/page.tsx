import { Categories } from '../components/Categories';
import { ProductsPreview } from '../components/ProductsPreview';
import { getProducts } from '../services';

export default async function MainPage() {
  const { products: popularProducts } = await getProducts({ popular: true, qty: 10 });
  const { products: newProducts } = await getProducts({ qty: 10 });

  return (
    <>
      <Categories />
      <ProductsPreview title="Популярные товары" products={popularProducts} />
      <ProductsPreview title="Новинки" products={newProducts} />
    </>
  );
}
