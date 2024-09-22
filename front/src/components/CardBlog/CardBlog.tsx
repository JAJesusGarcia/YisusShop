import Image from "next/image";
import Link from "next/link";
import { images } from "@/mocks/images";

const CardBlog = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="mb-2 text-4xl text-quinary">Recent Blog</h1>
      <p className="mb-8 text-tertiary">LAST NEW TECHNOLOGY</p>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {images.map((image) => (
          <Link href={image.alt} key={image.id}>
            <div className="group cursor-pointer">
              <div className="relative mb-4 h-64 w-full overflow-hidden rounded-2xl">
                <Image
                  src={image.url}
                  alt={`Blog image ${image.id}`}
                  layout="fill"
                  objectFit="cover"
                  className="transition-all duration-300 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-30"></div>
              </div>
              <h3 className="mb-5 text-xl font-semibold transition-colors duration-300 group-hover:text-primary">
                {image.title}
              </h3>
              <p className="mb-10 text-quinary">{image.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CardBlog;
