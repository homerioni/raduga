import { apiRoutes } from '../constants';
import { axiosInstance } from './index';

export const uploadImage = async (formData: FormData): Promise<string> => {
  const { data } = await axiosInstance.post(apiRoutes.upload, formData);

  return data;
};
