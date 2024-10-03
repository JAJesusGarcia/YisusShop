"use client";

import { IProduct } from "@/app/interfaces/products";
import { AuthContext } from "@/context/authContext";
import { CartContext } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

// interfaz para las props del componente
interface BuyButtonProps {
  product: IProduct;
}

const BuyButton = ({ product }: BuyButtonProps) => {
  const { user } = useContext(AuthContext);
  const { addToCart, cart } = useContext(CartContext);
  const router = useRouter();

  const showAlert = (
    message: string | React.ReactNode,
    icon: "success" | "error" | "warning" | "info",
    callback?: () => void,
  ) => {
    MySwal.fire({
      html: <p>{message}</p>,
      icon: icon,
      toast: true,
      position: "top",
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
      willClose: () => {
        if (callback) {
          callback();
        }
        router.push("/products");
      },
    });
  };

  const handleBuy = () => {
    if (!user?.login) {
      router.push("/login");
    } else {
      // Verificar si el producto ya está en el carrito
      if (!cart.some((p: IProduct) => p.id === product.id)) {
        addToCart(product);
        showAlert(<>{product.name} added to your cart</>, "success");
      } else {
        showAlert(<>{product.name} is already in your cart</>, "warning");
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
