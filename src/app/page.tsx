import { Categories } from '../components/Categories';
import { ProductsPreview } from '../components/ProductsPreview';

export default async function MainPage() {
  return (
    <>
      <Categories />
      <ProductsPreview products={[]} />
      <ProductsPreview products={[]} />
    </>
  );
}
