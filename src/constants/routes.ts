export const apiRoutes = {
  products: '/products',
  product: '/product',
  categories: '/categories',
  category: '/category',
  upload: '/upload',
  updateProduct: '/product/update',
} as const;

export const routes = {
  main: '/',
  catalog: '/catalog',
  product: '/product',
} as const;

const adminRoute = '/panel';

export const adminRoutes = {
  main: adminRoute,
  products: `${adminRoute}/products`,
  categories: `${adminRoute}/categories`,
} as const;
