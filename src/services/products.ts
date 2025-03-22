import { Product } from '@prisma/client';
import { apiRoutes } from '../constants';
import { axiosInstance } from './index';

type TGetProductsProps = {
  search?: string;
  category?: number;
  stock?: boolean;
  qty?: number;
  popular?: boolean;
  page?: string | number;
};

type TGetProductsResponse = {
  products: Product[];
  totalCount: number;
  activePage: number;
  totalPages: number;
};

export const getProducts = async (params?: TGetProductsProps) => {
  const { data } = await axiosInstance.get<TGetProductsResponse>(apiRoutes.products, { params });

  return data;
};

export const getProduct = async (id: string) => {
  const { data } = await axiosInstance.get<Product>(apiRoutes.product, { params: { id } });

  return data;
};
