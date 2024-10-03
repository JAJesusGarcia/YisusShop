"use client";

import React, { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { CartContext } from "@/context/CartContext";

import {
  ShoppingCart,
  Package,
  DollarSign,
  CheckCircle,
  Trash2,
  XCircle,
} from "lucide-react";
import { IProduct } from "../interfaces/products";
import { AuthContext } from "@/context/authContext";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { IOrder } from "@/interfaces/forms";

const MySwal = withReactContent(Swal);

const Cart = () => {
  // Extraer cart y funciones del contexto
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  // Extraer user y funciones del contexto de autenticación
  const { user } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    // Verificar si el usuario esta autenticado
    if (!user) {
      router.push("/login");
    }
  }, [user, router]);

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
      timer: 2000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
      willClose: () => {
        if (callback) {
          callback();
        }
      },
    });
  };

  const handleOrder = () => {
    // Defino la URL para enviar la orden
    const url =
      process.env.NEXT_PUBLIC_API_URL + "/orders" ||
      "http://localhost:3001/orders";
    const products = cart.map((product: IProduct) => product.id);

    // Enviar la orden al servidor
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: user?.token as string,
      },
      body: JSON.stringify({
        userId: user?.user.userId,
        products: products,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        clearCart();
        const userWithNewOrder = user;
        userWithNewOrder?.user.orders?.push({
          id: json.id,
          date: json.date,
        } as IOrder);
        showAlert("Order placed successfully!", "success", () => {
          router.push("/");
        });
      })
      .catch((error) => {
        console.error("Error placing order:", error);
        showAlert(
          "There was an error placing your order. Please try again.",
          "error",
        );
      });
  };

  const handleRemove = (productId: number, productName: string) => {
    MySwal.fire({
      title: `Are you sure you want to remove ${productName}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(productId); // Solo eliminar si el usuario confirma
        setTimeout(() => {
          if (cart.length === 1) {
            showAlert(
              `${productName} has been removed from your cart.`,
              "success",
              () => router.push("/"),
            );
          } else {
            showAlert(
              `${productName} has been removed from your cart.`,
              "success",
            );
          }
        }, 0);
      }
    });
  };

  const handleClearCart = () => {
    MySwal.fire({
      title: "Are you sure you want to clear the cart?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, clear it!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        showAlert("Your cart has been cleared.", "success", () => {
          router.push("/");
        });
      }
    });
  };

  // Calcular el total de la compra
  const totalPrice = cart.reduce((a: number, b: IProduct) => a + b.price, 0);

  return (
    <div className="container">
      <div className="mx-auto my-16 max-w-4xl overflow-hidden rounded-lg bg-tertiary shadow-lg">
        <div className="flex items-center justify-between bg-primary p-6 text-white">
          <h1 className="text-quatinary text-3xl font-bold">Your Cart</h1>
          <ShoppingCart size={28} />
        </div>

        <div className="p-6">
          {cart.length === 0 ? (
            <div className="py-8 text-center text-gray-500">
              <ShoppingCart size={48} className="mx-auto mb-4" />
              <p className="text-xl">Your cart is empty.</p>
              <button
                onClick={() => router.push("/products")}
                className="mt-4 text-primary transition-colors hover:text-primary/80"
              >
                Browse Products
              </button>
            </div>
          ) : (
            <div className="mb-8 space-y-4">
              {cart.map((product: IProduct) => (
                <div
                  key={product.id}
                  className="flex items-center justify-between rounded-lg bg-gray-50 p-4"
                >
                  <div className="flex items-center">
                    <Package className="mr-4 text-primary" size={24} />
                    <span className="text-lg font-medium text-secondary">
                      {product.name}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-lg font-bold text-primary">
                      ${product.price.toFixed(2)}
                    </span>
                    <button
                      onClick={() => handleRemove(product.id, product.name)}
                      className="ml-4 font-bold text-secondary/50 hover:text-red-700"
                      aria-label={`Remove ${product.name} from cart`}
                    >
                      <Trash2 size={24} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="flex flex-col items-center justify-between rounded-lg bg-gray-50 p-4 sm:flex-row">
            <div className="mb-4 flex flex-col items-center sm:mb-0 sm:flex-row">
              <div className="mb-2 mr-8 flex items-center sm:mb-0">
                <Package className="mr-2 text-primary" size={20} />
                <span className="font-medium text-secondary/70">
                  Total Products: {cart.length}
                </span>
              </div>
              <div className="flex items-center">
                <DollarSign className="mr-2 text-primary" size={20} />
                <span className="font-medium text-secondary/70">
                  Total Price: ${totalPrice.toFixed(2)}
                </span>
              </div>
            </div>
            <div className="flex space-x-4">
              <button
                className="relative z-10 flex items-center justify-center rounded-full border-primary bg-primary px-6 py-2 font-bold text-secondary transition duration-300 ease-in-out hover:border-primary hover:bg-secondary hover:text-primary disabled:cursor-not-allowed disabled:opacity-50"
                onClick={handleOrder}
                disabled={cart.length === 0}
              >
                <CheckCircle size={20} className="mr-2" />
                Finish Order
              </button>
              <button
                className="flex items-center justify-center rounded-full bg-red-500 px-6 py-2 font-bold text-secondary transition duration-300 ease-in-out hover:bg-secondary hover:text-red-500 disabled:cursor-not-allowed disabled:opacity-50"
                onClick={handleClearCart}
                disabled={cart.length === 0}
              >
                <XCircle size={20} className="mr-2" />
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
