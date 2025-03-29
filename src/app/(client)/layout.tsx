import { Footer } from '../../components/client/Footer';
import { Header } from '../../components/client/Header';
import { MyMap } from '../../components/client/MyMap';
import '../../components/ui/global.scss';

export default function ClientLayout({
  children,
  product,
}: {
  children: React.ReactNode;
  product: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main>
        {children}
        <MyMap />
      </main>
      <Footer />

      {product}
    </>
  );
}
