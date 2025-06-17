import { tesloApi } from '@/api/tesloApi';
import type { IProduct } from '../interfaces/product.interface';
import { getProductImageAction } from './get-product-image.action';

export const getProducts = async (page: number = 1, limit: number = 10) => {
  try {
    const { data } = await tesloApi.get<IProduct[]>(
      `/products?limit=${limit}&offset=${page * limit}`,
    );

    return data.map((product) => ({
      ...product,
      images: product.images.map(getProductImageAction),
    }));
  } catch (error) {
    console.log(error);

    throw new Error('Error al obtener los productos');
  }
};
