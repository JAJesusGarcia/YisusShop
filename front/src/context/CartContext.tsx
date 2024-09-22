"use client";

import React, { createContext, useState, useEffect, useContext } from "react";
import { IProduct } from "@/app/interfaces/products";
import { AuthContext } from "./authContext";

interface CartContextProps {
  cart: IProduct[];
  addToCart: (product: IProduct) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
}

export const CartContext = createContext<CartContextProps>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
});

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<IProduct[]>([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user) {
      const savedCart = localStorage.getItem("cart");
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
    } else {
      setCart([]);
    }
  }, [user]);

  const addToCart = (product: IProduct) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeFromCart = (productId: number) => {
    const updatedCart = cart.filter((product) => product.id !== productId);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
