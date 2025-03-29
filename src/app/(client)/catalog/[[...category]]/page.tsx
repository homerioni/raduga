import { CatalogTitleWrapper } from '../../../../components/client/CatalogTitleWrapper';
import { Products } from '../../../../components/client/Products';
import { Pagination } from '../../../../components/ui/Pagination';
import { routes } from '../../../../constants';
import { getProducts } from '../../../../services';
import { getCategories, getCategory } from '../../../../services/categories';

export default async function CatalogPage({
  params,
  searchParams,
}: {
  params: Promise<{ category?: string[] }>;
  searchParams: Promise<{ page?: string; search?: string }>;
}) {
  const pathName = await params.then((res) =>
    res.category?.length ? res.category[res.category.length - 1] : ''
  );
  const searchParamsRes = await searchParams.then((res) => res);
  const category = pathName ? await getCategory({ linkName: pathName }) : undefined;
  const categories = !category ? await getCategories() : null;
  const { products, totalPages, activePage } = await getProducts({
    category: category?.id,
    page: searchParamsRes.page,
    search: searchParamsRes.search,
  });

  return (
    <section>
      <div className="container">
        {!searchParamsRes.search && (
          <CatalogTitleWrapper
            title={category?.name ?? 'Каталог'}
            pathName={pathName || routes.catalog}
            subCategories={category?.children || categories || []}
          />
        )}
        <Products products={products} />
        {totalPages > 1 && (
          <Pagination
            searchParams={searchParamsRes}
            qtyPages={totalPages}
            activePage={activePage}
          />
        )}
      </div>
    </section>
  );
}
