import Card from "@/components/Card/Card";
import CardBlog from "@/components/CardBlog/CardBlog";
import CardList from "@/components/CardList/CardList";
import Hero from "@/components/Hero/Hero";

import { getProductsService } from "@/services/productsService";
import { IProduct } from "../interfaces/products";

const Page = async () => {
  try {
    const url = process.env.API_URL + "/products"; // Construyendo la URL de la API a partir de las variables de entorno
    if (!url) {
      throw new Error("API_URL is not defined in environment variables"); // Verificación de que la URL de la API está definida
    }

    const products = await getProductsService(url); // Llamada al servicio para obtener los productos

    // Verificación de que se obtuvieron productos válidos
    if (!Array.isArray(products) || products.length === 0) {
      throw new Error("No products found or invalid data format");
    }

    // Selección aleatoria de 4 productos destacados
    const featuredProducts = products
      .sort(() => 0.5 - Math.random())
      .filter(
        (product, index, self) =>
          index === self.findIndex((t) => t.id === product.id),
      )
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
    console.error("Error in page component:", error);
    // Renderizo un mensaje de error en caso de que algo salga mal
    return (
      // eslint-disable-next-line tailwindcss/enforces-shorthand
      <div className="mb-10 mt-10 h-full p-5 text-center">
        We are sorry, an error occurred while loading the products. Please,
        Please try again later.
      </div>
    );
  }
};

export default Page;
