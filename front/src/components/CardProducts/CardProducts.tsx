import { IProduct } from '@/app/interfaces/products';
import { Heart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface ProductProps {
  product: IProduct;
}

const CardProducts = ({ product }: ProductProps) => {
  return (
    <div className="bg-secondary rounded-xl overflow-hidden flex flex-col h-full transition-all duration-900 ease-in-out transform hover:shadow-2xl hover:scale-105 group relative">
      <Link
        className="flex-grow flex flex-col relative"
        href={`/products/${product.id}`}
      >
        <div className="relative pt-[100%] w-full">
          <Image
            src={product.image}
            alt={product.name}
            layout="fill"
            objectFit="cover"
            className="absolute top-0 left-0 opacity-10 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
          />
          <div className="absolute top-2 left-2 text-quinary text-sm px-2 py-1 rounded">
            US$ {product.price}
          </div>
          <Link href="/favorites">
            <button className="absolute top-2 right-2 text-tertiary hover:text-pink-400 transition-colors duration-300">
              <Heart size={24} />
            </button>
          </Link>
        </div>
      </Link>
      <div className="p-4 bg-tertiary transition-all duration-300 group-hover:bg-primary relative">
        <div className="group-hover:opacity-0 group-hover:invisible transition-all duration-300">
          <h2 className="text-2xl text-quinary truncate">{product.name}</h2>
        </div>
        <Link
          href={`/products/${product.id}`}
          className="absolute inset-0 flex items-center justify-center opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300"
        >
          <span className="bg-primary text-secondary py-2 px-4 font-bold hover:text-secondary transition-colors duration-300">
            ADD TO CART
          </span>
        </Link>
      </div>
    </div>
  );
};

export default CardProducts;
