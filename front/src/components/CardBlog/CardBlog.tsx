import Image from 'next/image';
import Link from 'next/link';
import { images } from '@/mocks/images';

const CardBlog = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl text-quinary mb-2">Recent Blog</h1>
      <p className="text-tertiary mb-8">LAST NEW TECHNOLOGY</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((image) => (
          <Link href={image.alt} key={image.id}>
            <div className="group cursor-pointer">
              <div className="relative h-64 w-full mb-4 overflow-hidden rounded-2xl">
                <Image
                  src={image.url}
                  alt={`Blog image ${image.id}`}
                  layout="fill"
                  objectFit="cover"
                  className="transition-all duration-300 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300 ease-in-out"></div>
              </div>
              <h3 className="text-xl font-semibold mb-5 group-hover:text-primary transition-colors duration-300">
                {image.title}
              </h3>
              <p className="text-quinary mb-10">{image.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CardBlog;
