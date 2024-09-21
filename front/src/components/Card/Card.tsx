'use client';

import { IProduct } from '@/app/interfaces/products';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface ProductProps {
  product: IProduct;
}

gsap.registerPlugin(ScrollTrigger);

const Card = ({ product }: ProductProps) => {
  const imageRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const image = imageRef.current;
    let animation: gsap.core.Tween;

    if (isHovered) {
      animation = gsap.to(image, {
        rotation: 15,
        x: -30,
        y: -20,
        scale: 1.2,
        ease: 'power1.out',
        duration: 0.5,
      });
    } else {
      animation = gsap.to(image, {
        rotation: 15,
        x: -80, // -20px in rem
        y: -60, // -15px in rem
        scale: 1.2,
        ease: 'power1.in',
        duration: 0.5,
      });
    }

    return () => {
      animation.kill();
    };
  }, [isHovered]);

  useEffect(() => {
    gsap.to('.scroll-image', {
      scrollTrigger: {
        trigger: '.scroll-image',
        start: 'top 50%',
        end: 'bottom 50%',
        scrub: 5,
      },
      rotation: 15,
      x: -50,
      scale: 1.2,
      ease: 'power1.inOut',
    });
  }, []);

  return (
    <div className="bg-secondary text-quinary shadow-2xl rounded-lg gap-2 flex flex-col group transition-all duration-300 hover:shadow-neutral-400 mt-5 w-full h-full">
      <div
        className="relative w-full pt-[100%] overflow-hidden rounded-lg"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          ref={imageRef}
          src={product.image}
          alt={product.name}
          layout="fill"
          objectFit="contain"
          className="scroll-image absolute inset-0 transform -translate-x-20 -translate-y-15"
        />
      </div>
      <Link
        href="/products"
        className="flex flex-col py-1 px-4 flex-grow justify-end items-end"
      >
        <h2 className=" text-xl sm:text-2xl font-semibold line-clamp-2">
          {product.name}
        </h2>
        <p className="text-sm text-tertiary/70 hover:text-primary">
          Show Products
        </p>
      </Link>
    </div>
  );
};

export default Card;
