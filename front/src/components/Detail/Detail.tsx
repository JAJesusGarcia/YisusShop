import { IProduct } from "@/app/interfaces/products";
import Image from "next/image";

const Detail = (product: IProduct) => {
  return (
    <div className="flex flex-col items-start border-e-red-50 bg-secondary p-10">
      <h1 className="mb-4 text-5xl text-quinary">{product.name}</h1>
      <p className="mb-2 text-2xl text-primary">${product.price.toFixed(2)}</p>
      <p className="mb-4 text-quinary">{product.description}</p>
      <div className="relative h-96 w-full">
        <Image
          src={product.image}
          alt={product.name}
          layout="fill"
          objectFit="contain"
          priority
        />
      </div>
    </div>
  );
};

export default Detail;
