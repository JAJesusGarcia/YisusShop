import { IProduct } from '@/app/interfaces/products';

export const getProductsService = async (url: string) => {
  const response = await fetch(url, { next: { revalidate: 0 } });
  const products = await response.json();

  return products;
};

export const getProductById = async (url: string, id: string) => {
  const response = await getProductsService(url);
  const product = response.filter(
    (item: IProduct) => item.id.toString() === id,
  )[0];

  return product;
};
