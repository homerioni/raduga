import Head from 'next/head';
import { Product } from '../../../../components/client/Product';
import { getProduct } from '../../../../services/products';

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const product = await getProduct(id);

  return (
    <>
      <Head>
        <title>{product.name}</title>
        <meta name="description" content={`${product.description} - ${product.description}`} />
        <meta name="keywords" content="ключевые, слова, через, запятую" />
      </Head>
      <section className="container">
        <Product product={product} />
      </section>
    </>
  );
}
