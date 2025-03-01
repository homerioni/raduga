import { CatalogTitleWrapper } from '../../../components/CatalogTitleWrapper';
import { Products } from '../../../components/Products';
import { Pagination } from '../../../components/ui/Pagination';

export default async function CatalogPage({ params }: { params: Promise<{ category: string[] }> }) {
  const categories = await params.then((res) => res.category ?? []);
  const products = await fetch('http://localhost:3000/api/products').then((res) => res.json());

  return (
    <section>
      <div className="container">
        <CatalogTitleWrapper />
        <Products products={[]} />
        <Pagination />
      </div>
    </section>
  );
}
