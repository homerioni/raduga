import { ReactNode } from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { MyMap } from '../components/MyMap';
import { vars } from '../constants';
import '../components/ui/font/stylesheet.css';
import '../components/ui/global.scss';

export default function RootLayout({
  children,
  product,
}: {
  children: ReactNode;
  product: ReactNode;
}) {
  return (
    <html lang="ru" style={vars}>
      <body>
        <Header />
        <main>
          {children}
          <MyMap />
        </main>
        <Footer />

        {product}
      </body>
    </html>
  );
}
