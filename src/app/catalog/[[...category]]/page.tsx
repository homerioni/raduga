import { CatalogTitleWrapper } from '../../../components/CatalogTitleWrapper';
import { Products } from '../../../components/Products';
import { Pagination } from '../../../components/ui/Pagination';

export default async function CatalogPage({
  params,
}: {
  params: Promise<{ category: string[] }>;
}) {
  const categories = await params.then((res) => res.category ?? []);

  return (
    <section>
      <div className="container">
        <CatalogTitleWrapper />
        <Products />
        <Pagination />
      </div>
    </section>
  );
}
