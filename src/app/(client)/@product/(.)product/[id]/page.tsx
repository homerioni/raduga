import { ModalIntercepting } from '../../../../../components/client/Modal';
import { Product } from '../../../../../components/client/Product';
import { getProduct, getProducts } from '../../../../../services/products';

export async function generateStaticParams() {
  const { products } = await getProducts({ qty: 1000 });

  return products.map((product) => ({
    id: String(product.id),
  }));
}

export default async function ModalProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const product = await getProduct(id);

  return (
    <ModalIntercepting>
      <Product product={product} />
    </ModalIntercepting>
  );
}
