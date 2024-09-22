import { IProduct } from "@/app/interfaces/products";
import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProductProps {
  product: IProduct;
}

const CardProducts = ({ product }: ProductProps) => {
  return (
    <div className="duration-900 group relative flex h-full transform flex-col overflow-hidden rounded-xl bg-secondary transition-all ease-in-out hover:scale-105 hover:shadow-2xl">
      <Link
        className="relative flex grow flex-col"
        href={`/products/${product.id}`}
      >
        <div className="relative w-full pt-[100%]">
          <Image
            src={product.image}
            alt={product.name}
            layout="fill"
            objectFit="cover"
            className="absolute left-0 top-0 opacity-10 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
          />
          <div className="absolute left-2 top-2 rounded px-2 py-1 text-sm text-quinary">
            US$ {product.price}
          </div>
          <Link href="/favorites">
            <button className="absolute right-2 top-2 text-tertiary transition-colors duration-300 hover:text-pink-400">
              <Heart size={24} />
            </button>
          </Link>
        </div>
      </Link>
      <div className="relative bg-tertiary p-4 transition-all duration-300 group-hover:bg-primary">
        <div className="transition-all duration-300 group-hover:invisible group-hover:opacity-0">
          <h2 className="truncate text-2xl text-quinary">{product.name}</h2>
        </div>
        <Link
          href={`/products/${product.id}`}
          className="invisible absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100"
        >
          <span className="bg-primary px-4 py-2 font-bold text-secondary transition-colors duration-300 hover:text-secondary">
            ADD TO CART
          </span>
        </Link>
      </div>
    </div>
  );
};

export default CardProducts;
