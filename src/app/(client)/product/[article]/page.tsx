import Head from 'next/head';
import { Product } from '../../../../components/client/Product';
import { getProduct } from '../../../../services/products';

export default async function ProductPage({ params }: { params: Promise<{ article: string }> }) {
  const id = await params.then((res) => res.article);

  const product = await getProduct(id);

  return (
    <>
      <Head>
        <title>Название товара</title>
        <meta name="description" content="Описание товара" />
        <meta name="keywords" content="ключевые, слова, через, запятую" />
      </Head>
      <section className="container">
        <Product product={product} />
      </section>
    </>
  );
}
