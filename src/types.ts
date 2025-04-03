import { Category, Product } from '@prisma/client';

export type TGetCategoriesResponse = Category & {
  children: TGetCategoriesResponse[];
  parent: Category;
};

export type CreateProductData = Omit<Product, 'id' | 'createdAt' | 'updateAt'>;

export type TProduct = Product & { category: Category };
