import { Category, Product } from '@prisma/client';
import { apiRoutes } from '../constants';
import { CreateProductData } from '../types';
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
  products: (Product & { category: Category })[];
  totalCount: number;
  activePage: number;
  totalPages: number;
};

export const getProducts = async (params?: TGetProductsProps) => {
  const { data } = await axiosInstance.get<TGetProductsResponse>(apiRoutes.products, { params });

  return data;
};

export const getProduct = async (id: number) => {
  const { data } = await axiosInstance.get<Product>(apiRoutes.product, { params: { id } });

  return data;
};

export const deleteProducts = async (ids: number[]) => {
  const { data } = await axiosInstance.delete(apiRoutes.products, {
    params: { ids: ids.join(',') },
  });

  return data;
};

export const createProduct = async (product: CreateProductData) => {
  const { data } = await axiosInstance.post(apiRoutes.product, product);

  return data;
};

export const updateProduct = async (product: Product) => {
  const { createdAt, updateAt, ...updateData } = product;

  const { data } = await axiosInstance.post(apiRoutes.updateProduct, updateData);

  return data;
};
