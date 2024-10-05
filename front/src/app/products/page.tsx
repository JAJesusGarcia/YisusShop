/** eslint-disable tailwindcss/enforces-shorthand */
import CardList from "@/components/CardList/CardList";
import CardProducts from "@/components/CardProducts/CardProducts";
import { IProduct } from "../interfaces/products";
import { getProductsService } from "@/services/productsService";
import CardProducts404 from "@/components/CardProducts404/CardProducts404";

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

    return (
      <div className="container">
        <CardProducts404 />
      </div>
    );
  }
};

export default page;
