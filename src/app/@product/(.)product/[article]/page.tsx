import { ModalIntercepting } from '../../../../components/Modal';
import { Product } from '../../../../components/Product';
import { getProduct } from '../../../../services/products';

export default async function ModalProductPage({
  params,
}: {
  params: Promise<{ article: string }>;
}) {
  const id = await params.then((res) => res.article);

  const product = await getProduct(id);

  return (
    <ModalIntercepting>
      <Product product={product} />
    </ModalIntercepting>
  );
}
