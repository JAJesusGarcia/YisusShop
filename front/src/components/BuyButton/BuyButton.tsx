"use client";

import { IProduct } from "@/app/interfaces/products";
import { AuthContext } from "@/context/authContext";
import { CartContext } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

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
      router.push("/login");
    } else {
      if (!cart.some((p: IProduct) => p.id === product.id)) {
        addToCart(product);
        // alert(`${product.name} added to your cart`);
        MySwal.fire({
          title: `${product.name} added to your cart`,
          icon: "success",
          confirmButtonText: "OK",
        });
      } else {
        // alert(`${product.name} is already in your cart`);
        MySwal.fire({
          title: `${product.name} is already in your cart`,
          icon: "warning",
          confirmButtonText: "OK",
        });
      }
    }
  };

  return (
    <button
      className="relative z-10 m-8 mt-10 rounded border-2 border-primary bg-primary px-4 py-2 font-bold text-secondary transition-all duration-300 hover:scale-105 hover:border-primary hover:bg-secondary hover:text-primary active:scale-100"
      onClick={handleBuy}
    >
      BUY
    </button>
  );
};

export default BuyButton;
