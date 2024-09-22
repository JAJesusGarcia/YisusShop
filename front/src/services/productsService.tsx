import { IProduct } from "@/app/interfaces/products";

export const getProductsService = async (url: string) => {
  try {
    console.log("Fetching from URL:", url);
    const response = await fetch(url, {
      next: { revalidate: 0 },
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      console.log("Response status:", response.status);
      console.log("Response headers:", response.headers);
      console.log("Response text:", await response.text());
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const products = await response.json();
    console.log("Received products:", products);
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const getProductById = async (url: string, id: string) => {
  try {
    const response = await getProductsService(url);
    if (!Array.isArray(response)) {
      throw new Error("Products data is not in the expected format");
    }
    const product = response.find(
      (item: IProduct) => item.id.toString() === id,
    );
    if (!product) {
      throw new Error(`Product with id ${id} not found`);
    }
    return product;
  } catch (error) {
    console.error("Error getting product by ID:", error);
    throw error; // Re-throw the error so it can be handled by the caller
  }
};
