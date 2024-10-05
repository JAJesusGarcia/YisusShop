import Link from "next/link";

const Card404 = () => {
  return (
    <div className="mb-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <div className="mt-5 flex size-full flex-col gap-2 rounded-lg bg-secondary text-quinary shadow-2xl transition-all duration-300 hover:shadow-neutral-400">
        <div className="my-20 flex w-full flex-col justify-items-center rounded-lg px-4 py-10 text-center">
          <h3 className="m-2 text-tertiary">
            We are sorry, an error occurred while loading the products.
          </h3>
          <h4 className="m-2 text-tertiary">Please try again later.</h4>
        </div>

        <Link
          href="/products"
          className="flex grow flex-col items-end justify-end px-4 py-1"
        >
          <h2 className="line-clamp-2 text-xl font-semibold sm:text-2xl">
            LOADING...
          </h2>
          <p className="text-sm text-tertiary/70 hover:text-primary">
            Show Products
          </p>
        </Link>
      </div>
      <div className="mt-5 flex size-full flex-col gap-2 rounded-lg bg-secondary text-quinary shadow-2xl transition-all duration-300 hover:shadow-neutral-400">
        <div className="my-20 flex w-full flex-col justify-items-center rounded-lg px-4 py-10 text-center">
          <h3 className="m-2 text-tertiary">
            We are sorry, an error occurred while loading the products.
          </h3>
          <h4 className="m-2 text-tertiary">Please try again later.</h4>
        </div>

        <Link
          href="/products"
          className="flex grow flex-col items-end justify-end px-4 py-1"
        >
          <h2 className="line-clamp-2 text-xl font-semibold sm:text-2xl">
            LOADING...
          </h2>
          <p className="text-sm text-tertiary/70 hover:text-primary">
            Show Products
          </p>
        </Link>
      </div>
      <div className="mt-5 flex size-full flex-col gap-2 rounded-lg bg-secondary text-quinary shadow-2xl transition-all duration-300 hover:shadow-neutral-400">
        <div className="my-20 flex w-full flex-col justify-items-center rounded-lg px-4 py-10 text-center">
          <h3 className="m-2 text-tertiary">
            We are sorry, an error occurred while loading the products.
          </h3>
          <h4 className="m-2 text-tertiary">Please try again later.</h4>
        </div>

        <Link
          href="/products"
          className="flex grow flex-col items-end justify-end px-4 py-1"
        >
          <h2 className="line-clamp-2 text-xl font-semibold sm:text-2xl">
            LOADING...
          </h2>
          <p className="text-sm text-tertiary/70 hover:text-primary">
            Show Products
          </p>
        </Link>
      </div>
      <div className="mt-5 flex size-full flex-col gap-2 rounded-lg bg-secondary text-quinary shadow-2xl transition-all duration-300 hover:shadow-neutral-400">
        <div className="my-20 flex w-full flex-col justify-items-center rounded-lg px-4 py-10 text-center">
          <h3 className="m-2 text-tertiary">
            We are sorry, an error occurred while loading the products.
          </h3>
          <h4 className="m-2 text-tertiary">Please try again later.</h4>
        </div>

        <Link
          href="/products"
          className="flex grow flex-col items-end justify-end px-4 py-1"
        >
          <h2 className="line-clamp-2 text-xl font-semibold sm:text-2xl">
            LOADING...
          </h2>
          <p className="text-sm text-tertiary/70 hover:text-primary">
            Show Products
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Card404;
