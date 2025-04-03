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
      <head>
        <meta name="robots" content="noindex, nofollow" />
      </head>
      <body>{children}</body>
    </html>
  );
}
