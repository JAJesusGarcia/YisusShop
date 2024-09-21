'use client';

import { IProduct } from '@/app/interfaces/products';
import { AuthContext } from '@/context/authContext';
import { CartContext } from '@/context/CartContext';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

interface BuyButtonProps {
  product: IProduct;
}

const BuyButton = ({ product }: BuyButtonProps) => {
  const { user } = useContext(AuthContext);
  const { addToCart, cart } = useContext(CartContext);
  const router = useRouter();

  const handleBuy = () => {
    if (!user?.login) {
      router.push('/login');
    } else {
      if (!cart.some((p: IProduct) => p.id === product.id)) {
        addToCart(product);
        // alert(`${product.name} added to your cart`);
        MySwal.fire({
          title: `${product.name} added to your cart`,
          icon: 'success',
          confirmButtonText: 'OK',
        });
      } else {
        // alert(`${product.name} is already in your cart`);
        MySwal.fire({
          title: `${product.name} is already in your cart`,
          icon: 'warning',
          confirmButtonText: 'OK',
        });
      }
    }
  };

  return (
    <button
      className="py-2 px-4 m-8 border-2 rounded transition-all hover:scale-105 duration-300 active:scale-100 mt-10 text-secondary bg-primary border-primary font-bold hover:bg-secondary hover:text-primary hover:border-primary relative z-10"
      onClick={handleBuy}
    >
      BUY
    </button>
  );
};

export default BuyButton;
