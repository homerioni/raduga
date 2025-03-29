import { mantineHtmlProps } from '@mantine/core';
import { vars } from '../constants';
import '../components/ui/font/stylesheet.css';

export const metadata = {
  title: 'Магазин Радуга',
  description: 'Магазин Радуга в Речице, канцтовары, книги и учебные пособия',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" style={vars} {...mantineHtmlProps}>
      <body>{children}</body>
    </html>
  );
}
