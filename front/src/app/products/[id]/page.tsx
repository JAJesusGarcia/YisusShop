import BuyButton from '@/components/BuyButton/BuyButton';
import { getProductById } from '@/services/productsService';
import { ChevronLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const page = async ({ params }: { params: { id: string } }) => {
  // const product = productsShop.filter((p) => p.id.toString() === params.id)[0];
  const url = `${process.env.API_URL}/products`;
  const product = await getProductById(url, params.id);
  if (product === undefined) {
    notFound();
  }

  return (
    <main className="container relative">
      <Link
        href="/products"
        className="absolute top-4 left-8 text-primary hover:text-primary/80 transition-colors"
      >
        <ChevronLeft className="w-8 h-8" />
      </Link>
      <div className="w-full max-w-6xl pt-10 bg-secondary/50 rounded-3xl">
        <div className="flex flex-col md:flex-row gap-10">
          <Image
            src={product.image}
            alt={product.name}
            width={320}
            height={320}
            className="w-full md:w-auto"
          />
          <div className="flex flex-col p-2 gap-4 mb-5 ml-5">
            <h1 className="text-4xl text-quinary">{product.name}</h1>
            <p className="text-4xl font-bold text-left text-primary">
              US$ {product.price}
            </p>
            <BuyButton product={product} />
          </div>
        </div>
        <div className="bg-secondary mb-10 rounded-xl">
          <h4 className="pt-2 pl-2 text-quinary">Description</h4>
          <div className="text-left text-bold text-xl text-primary">
            ____________
          </div>
          <p className="p-4 text-quinary">{product.description}</p>
        </div>
      </div>
    </main>
  );
};

export default page;
