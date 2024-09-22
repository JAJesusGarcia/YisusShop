"use client";

import { useEffect, useState } from "react";
import CardList from "../CardList/CardList";
import { productsShop } from "@/mocks/productsShop";
import CardProducts from "../CardProducts/CardProducts";
import { IProduct } from "@/app/interfaces/products";
import Loading from "@/app/loading";
import NotFound from "@/app/not-found";
const ClientProducts = () => {
  const [data, setData] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setData(productsShop);
      setIsLoading(false);
      setHasError(false);
    }, 1500);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (hasError) {
    return <NotFound />;
  }

  return (
    <CardList>
      {data.map((product, i) => (
        <CardProducts key={i} product={product} />
      ))}
    </CardList>
  );
};

export default ClientProducts;
