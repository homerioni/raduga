import { apiRoutes } from '../constants';
import { axiosInstance } from './index';

export const seoGenerate = async (message: string) => {
  const prompt =
    `Сгенерируй мне SEO описание товара "${message}", описание будет использоваться ` +
    `на сайте книжного магазина "Радуга", упомяни что это находится в городе Речица, ` +
    `чтобы при поиске товара или чего-то в Речице наш товар мог появляться в поиске, ` +
    `также упомяни SEO про все остальные товары, такие как "канцтовары, учебные пособия, ` +
    `книги, игрушки и прочее". Дай мне только текст описания чтобы я мог сразу скопировать ` +
    `и вставить в описание товара этот текст.`;

  const { data } = await axiosInstance.post(apiRoutes.generate, { prompt });

  return data;
};
