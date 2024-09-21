import Card from '@/components/Card/Card';
import CardBlog from '@/components/CardBlog/CardBlog';
import CardList from '@/components/CardList/CardList';
import Hero from '@/components/Hero/Hero';
import { IProduct } from './interfaces/products';
import { getProductsService } from '@/services/productsService';

const Page = async () => {
  try {
    const url = process.env.API_URL + '/products';
    if (!url) {
      throw new Error('API_URL is not defined in environment variables');
    }

    const products = await getProductsService(url);

    if (!Array.isArray(products) || products.length === 0) {
      throw new Error('No products found or invalid data format');
    }

    const featuredProducts = products
      .sort(() => 0.5 - Math.random())
      .slice(0, 4);

    return (
      <>
        <Hero />
        <main className="container">
          <CardList>
            {featuredProducts.map((product: IProduct, i: number) => (
              <Card key={product.id || i} product={product} />
            ))}
          </CardList>
          <CardBlog />
        </main>
      </>
    );
  } catch (error) {
    console.error('Error in page component:', error);
    // Aquí puedes renderizar un componente de error o un mensaje amigable
    return (
      <div>
        Lo sentimos, ha ocurrido un error al cargar los productos. Por favor,
        inténtelo de nuevo más tarde.
      </div>
    );
  }
};

export default Page;
