import CardList from '@/components/CardList/CardList';
import CardProducts from '@/components/CardProducts/CardProducts';
import { IProduct } from '../interfaces/products';
import { getProductsService } from '@/services/productsService';

const page = async () => {
  const url = process.env.API_URL + '/products';
  const products = await getProductsService(url);

  return (
    <main className="container">
      <div>
        <h1 className="text-4xl text-quinary mt-10 mb-10">Last Products</h1>
      </div>
      <CardList>
        {products.map((product: IProduct, i: number) => (
          <CardProducts key={i} product={product} />
        ))}
      </CardList>
    </main>
  );
};

export default page;
