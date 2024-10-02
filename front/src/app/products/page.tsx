/** eslint-disable tailwindcss/enforces-shorthand */
import CardList from "@/components/CardList/CardList";
import CardProducts from "@/components/CardProducts/CardProducts";
import { IProduct } from "../interfaces/products";
import { getProductsService } from "@/services/productsService";

const page = async () => {
  try {
    // Construyendo la URL de la API a partir de las variables de entorno
    const url = process.env.API_URL + "/products";
    // Llamada al servicio para obtener los productos
    const products = await getProductsService(url);

    return (
      <main className="container">
        <div>
          <h1 className="my-10 text-4xl text-quinary">Last Products</h1>
        </div>
        <CardList>
          {products.map((product: IProduct, i: number) => (
            <CardProducts key={i} product={product} />
          ))}
        </CardList>
      </main>
    );
  } catch (error) {
    console.error("Error in page component:", error);

    // mensaje de error en caso que algo salga mal
    return (
      <div className="mb-10 mt-10 h-full p-5 text-center">
        We are sorry, an error occurred while loading the products. Please,
        Please try again later.
      </div>
    );
  }
};

export default page;
