import { ReactNode } from 'react';
import Header from '../components/Header';
import { vars } from '../constants';
import '../components/ui/font/stylesheet.css';
import '../components/ui/global.scss';

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang="ru" style={vars}>
    <body>
      <Header />
      <main>{children}</main>
    </body>
  </html>
);

export default RootLayout;
