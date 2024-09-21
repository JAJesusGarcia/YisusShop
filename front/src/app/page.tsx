import Card from '@/components/Card/Card';
import CardBlog from '@/components/CardBlog/CardBlog';
import CardList from '@/components/CardList/CardList';
import Hero from '@/components/Hero/Hero';
import { IProduct } from './interfaces/products';
import { getProductsService } from '@/services/productsService';

const page = async () => {
  const url = process.env.API_URL + '/products';
  const products = await getProductsService(url);
  const featuredProducts = products
    .sort(() => 0.5 - Math.random()) // Baraja los productos aleatoriamente
    .slice(0, 4); // Obtén los primeros 4 productos

  return (
    <>
      <Hero />
      <main className="container">
        <CardList>
          {featuredProducts.map((product: IProduct, i: number) => (
            <Card key={i} product={product} />
          ))}
        </CardList>
        <CardBlog />
      </main>
    </>
  );
};

export default page;
