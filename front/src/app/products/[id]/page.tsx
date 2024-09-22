import BuyButton from "@/components/BuyButton/BuyButton";
import { getProductById } from "@/services/productsService";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

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
        className="absolute left-8 top-4 text-primary transition-colors hover:text-primary/80"
      >
        <ChevronLeft className="h-8 w-8" />
      </Link>
      <div className="w-full max-w-6xl rounded-3xl bg-secondary/50 pt-10">
        <div className="flex flex-col gap-10 md:flex-row">
          <Image
            src={product.image}
            alt={product.name}
            width={320}
            height={320}
            className="w-full md:w-auto"
          />
          <div className="mb-5 ml-5 flex flex-col gap-4 p-2">
            <h1 className="text-4xl text-quinary">{product.name}</h1>
            <p className="text-left text-4xl font-bold text-primary">
              US$ {product.price}
            </p>
            <BuyButton product={product} />
          </div>
        </div>
        <div className="mb-10 rounded-xl bg-secondary">
          <h4 className="pl-2 pt-2 text-quinary">Description</h4>
          <div className="text-bold text-left text-xl text-primary">
            ____________
          </div>
          <p className="p-4 text-quinary">{product.description}</p>
        </div>
      </div>
    </main>
  );
};

export default page;
