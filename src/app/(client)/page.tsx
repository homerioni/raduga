import { About } from '../../components/client/About';
import { Categories } from '../../components/client/Categories';
import { ProductsPreview } from '../../components/client/ProductsPreview';
import { getProducts } from '../../services';

export const revalidate = 3600;

export default async function MainPage() {
  const { products: popularProducts } = await getProducts({ popular: true, qty: 10 });
  const { products: newProducts } = await getProducts({ qty: 10 });

  return (
    <>
      <Categories />
      <ProductsPreview title="Популярные товары" products={popularProducts} />
      <ProductsPreview title="Новинки" products={newProducts} />
      <About />
    </>
  );
}
