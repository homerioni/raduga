import { ModalIntercepting } from '../../../../../components/client/Modal';
import { Product } from '../../../../../components/client/Product';
import { getProduct } from '../../../../../services/products';

export default async function ModalProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const product = await getProduct(id);

  return (
    <ModalIntercepting>
      <Product product={product} />
    </ModalIntercepting>
  );
}
