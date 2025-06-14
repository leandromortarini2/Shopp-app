import { tesloApi } from '@/api/tesloApi';
import type { IProduct } from '../interfaces/product.interface';

// oxlint-disable-next-line no-unused-vars
export const getProducts = async (page: number = 1, limit: number = 10) => {
  try {
    const { data } = await tesloApi.get<IProduct[]>(
      `/products?limit=${limit}&offset=${page * limit}`,
    );
    console.log(data);

    return data;
    // oxlint-disable-next-line no-unused-vars
  } catch (error) {
    throw new Error('Error al obtener los productos');
  }
};
