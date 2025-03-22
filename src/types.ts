import { Category } from '@prisma/client';

export type TGetCategoriesResponse = Category & {
  children: TGetCategoriesResponse[];
  parent: Category;
};
