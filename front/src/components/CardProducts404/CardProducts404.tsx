import React from "react";
import { Heart } from "lucide-react";

const CardProducts404 = () => {
  return (
    <div className="my-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <div className="flex h-[350px] flex-col rounded-lg bg-secondary text-quinary transition-all ease-in-out hover:scale-105 hover:shadow-2xl">
        <div className="relative h-[500px]">
          <div className="flex size-full flex-col items-center justify-center px-4 py-5 text-center">
            <h3 className="m-2 text-xl text-tertiary">
              We are sorry, an error occurred while loading the products.
            </h3>
            <h4 className="m-2 text-tertiary">Please try again later.</h4>
          </div>
          <div className="absolute left-2 top-2 rounded px-2 py-1 text-sm text-quinary">
            US$
          </div>
          <button
            disabled
            className="absolute right-2 top-2 text-tertiary transition-colors duration-300 hover:text-pink-400 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <Heart size={24} />
          </button>
        </div>
        <div className="flex h-[80px] justify-center bg-tertiary p-3 text-center">
          <h2 className="text-xl text-quinary">LOADING...</h2>
        </div>
      </div>
      <div className="flex h-[350px] flex-col rounded-lg bg-secondary text-quinary transition-all ease-in-out hover:scale-105 hover:shadow-2xl">
        <div className="relative h-[500px]">
          <div className="flex size-full flex-col items-center justify-center px-4 py-5 text-center">
            <h3 className="m-2 text-xl text-tertiary">
              We are sorry, an error occurred while loading the products.
            </h3>
            <h4 className="m-2 text-tertiary">Please try again later.</h4>
          </div>
          <div className="absolute left-2 top-2 rounded px-2 py-1 text-sm text-quinary">
            US$
          </div>
          <button
            disabled
            className="absolute right-2 top-2 text-tertiary transition-colors duration-300 hover:text-pink-400 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <Heart size={24} />
          </button>
        </div>
        <div className="flex h-[80px] justify-center bg-tertiary p-3 text-center">
          <h2 className="text-xl text-quinary">LOADING...</h2>
        </div>
      </div>
      <div className="flex h-[350px] flex-col rounded-lg bg-secondary text-quinary transition-all ease-in-out hover:scale-105 hover:shadow-2xl">
        <div className="relative h-[500px]">
          <div className="flex size-full flex-col items-center justify-center px-4 py-5 text-center">
            <h3 className="m-2 text-xl text-tertiary">
              We are sorry, an error occurred while loading the products.
            </h3>
            <h4 className="m-2 text-tertiary">Please try again later.</h4>
          </div>
          <div className="absolute left-2 top-2 rounded px-2 py-1 text-sm text-quinary">
            US$
          </div>
          <button
            disabled
            className="absolute right-2 top-2 text-tertiary transition-colors duration-300 hover:text-pink-400 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <Heart size={24} />
          </button>
        </div>
        <div className="flex h-[80px] justify-center bg-tertiary p-3 text-center">
          <h2 className="text-xl text-quinary">LOADING...</h2>
        </div>
      </div>
      <div className="flex h-[350px] flex-col rounded-lg bg-secondary text-quinary transition-all ease-in-out hover:scale-105 hover:shadow-2xl">
        <div className="relative h-[500px]">
          <div className="flex size-full flex-col items-center justify-center px-4 py-5 text-center">
            <h3 className="m-2 text-xl text-tertiary">
              We are sorry, an error occurred while loading the products.
            </h3>
            <h4 className="m-2 text-tertiary">Please try again later.</h4>
          </div>
          <div className="absolute left-2 top-2 rounded px-2 py-1 text-sm text-quinary">
            US$
          </div>
          <button
            disabled
            className="absolute right-2 top-2 text-tertiary transition-colors duration-300 hover:text-pink-400 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <Heart size={24} />
          </button>
        </div>
        <div className="flex h-[80px] justify-center bg-tertiary p-3 text-center">
          <h2 className="text-xl text-quinary">LOADING...</h2>
        </div>
      </div>
    </div>
  );
};

export default CardProducts404;
