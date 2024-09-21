import { IProduct } from '@/app/interfaces/products';

const Detail = (product: IProduct) => {
  return (
    <div className=" bg-secondary flex  border-e-red-50 p-10">
      <h1 className="text-5xl text-quinary">{product.name}</h1>
      <p className="text-primary">{product.price}</p>
      <p className="text-quinary">{product.description}</p>
      <img src={product.image} alt={product.name} />
    </div>
  );
};

export default Detail;
