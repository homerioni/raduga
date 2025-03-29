import { axiosInstance } from './index';
import { apiRoutes } from '../constants';

export const uploadImage = async (formData: FormData): Promise<string> => {
  const { data } = await axiosInstance.post(apiRoutes.upload, formData);

  return data;
};
