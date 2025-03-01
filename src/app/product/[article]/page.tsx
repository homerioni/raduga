import Head from 'next/head';
import Image from 'next/image';
import s from './styles.module.scss';

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = await params.then((res) => res.id);

  return (
    <>
      <Head>
        <title>Название товара</title>
        <meta name="description" content="Описание товара" />
        <meta name="keywords" content="ключевые, слова, через, запятую" />
      </Head>
      <section className={s.main}>
        <div className={`${s.container} container`}>
          <Image
            className={s.img}
            src="/img/test.jpg"
            alt=""
            width={600}
            height={600}
          />
          <div className={s.textWrapper}>
            <h1 className={s.title}>Название товара</h1>
            <div className={s.priceBox}>
              <p className={`${s.stock} ${s.active}`}>В наличии</p>
              <p className={s.price}>
                <span>4.20 руб</span>
                <span>5.25 руб</span>
              </p>
            </div>
            <p className={s.description}>Описание товара</p>
          </div>
        </div>
      </section>
    </>
  );
}
