'use client';

import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { CartContext } from '@/context/CartContext';

import {
  ShoppingCart,
  Package,
  DollarSign,
  CheckCircle,
  Trash2,
  XCircle,
} from 'lucide-react';
import { IProduct } from '../interfaces/products';
import { AuthContext } from '@/context/authContext';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { IOrder } from '@/interfaces/forms';

const MySwal = withReactContent(Swal);

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  const { user } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, [user, router]);

  const handleOrder = () => {
    const url =
      process.env.NEXT_PUBLIC_API_URL + '/orders' ||
      'http://localhost:3001/orders';
    const products = cart.map((product: IProduct) => product.id);

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
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

        // alert('Order placed successfully!');
        MySwal.fire({
          title: 'Order placed successfully!',
          icon: 'success',
          confirmButtonText: 'OK',
        });
      })
      .catch((error) => {
        console.error('Error placing order:', error);
        // alert('There was an error placing your order. Please try again.');
        MySwal.fire({
          title: 'There was an error placing your order. Please try again.',
          icon: 'error',
          confirmButtonText: 'OK',
        });
      });
  };

  const handleRemove = (productId: number, productName: string) => {
    MySwal.fire({
      title: `Are you sure you want to remove ${productName}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, remove it!',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(productId); // Solo eliminar si el usuario confirma
        MySwal.fire({
          title: 'Removed!',
          text: `${productName} has been removed from your cart.`,
          icon: 'success',
          confirmButtonText: 'OK',
        });
      }
    });
  };

  const handleClearCart = () => {
    MySwal.fire({
      title: 'Are you sure you want to clear the cart?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, clear it!',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart(); // Llamamos a la función clearCart para vaciar el carrito
        MySwal.fire({
          title: 'Cleared!',
          text: 'Your cart has been cleared.',
          icon: 'success',
          confirmButtonText: 'OK',
        });
      }
    });
  };

  const totalPrice = cart.reduce((a: number, b: IProduct) => a + b.price, 0);

  return (
    <div className="container">
      <div className="max-w-4xl mt-16 mb-16 mx-auto bg-tertiary rounded-lg shadow-lg overflow-hidden">
        <div className="bg-primary p-6 text-white flex items-center justify-between">
          <h1 className="text-3xl font-bold text-quatinary">Your Cart</h1>
          <ShoppingCart size={28} />
        </div>

        <div className="p-6">
          {cart.length === 0 ? (
            <div className="text-center text-gray-500 py-8">
              <ShoppingCart size={48} className="mx-auto mb-4" />
              <p className="text-xl">Your cart is empty.</p>
              <button
                onClick={() => router.push('/products')}
                className="mt-4 text-primary hover:text-primary/80 transition-colors"
              >
                Browse Products
              </button>
            </div>
          ) : (
            <div className="space-y-4 mb-8">
              {cart.map((product: IProduct) => (
                <div
                  key={product.id}
                  className="flex items-center justify-between bg-gray-50 p-4 rounded-lg"
                >
                  <div className="flex items-center">
                    <Package className="text-primary mr-4" size={24} />
                    <span className="text-lg text-secondary font-medium">
                      {product.name}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-lg font-bold text-primary">
                      ${product.price.toFixed(2)}
                    </span>
                    <button
                      onClick={() => handleRemove(product.id, product.name)}
                      className="text-secondary/50 hover:text-red-700 font-bold ml-4"
                      aria-label={`Remove ${product.name} from cart`}
                    >
                      <Trash2 size={24} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="bg-gray-50 p-4 rounded-lg flex flex-col sm:flex-row justify-between items-center">
            <div className="flex flex-col sm:flex-row items-center mb-4 sm:mb-0">
              <div className="flex items-center mr-8 mb-2 sm:mb-0">
                <Package className="text-primary mr-2" size={20} />
                <span className="font-medium text-secondary/70">
                  Total Products: {cart.length}
                </span>
              </div>
              <div className="flex items-center">
                <DollarSign className="text-primary mr-2" size={20} />
                <span className="font-medium text-secondary/70">
                  Total Price: ${totalPrice.toFixed(2)}
                </span>
              </div>
            </div>
            <div className="flex space-x-4">
              <button
                className="text-secondary bg-primary border-primary font-bold hover:bg-secondary hover:text-primary hover:border-primary relative z-10 px-6 py-2 rounded-full flex items-center justify-center transition duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={handleOrder}
                disabled={cart.length === 0}
              >
                <CheckCircle size={20} className="mr-2" />
                Finish Order
              </button>
              <button
                className="text-secondary bg-red-500 hover:bg-secondary hover:text-red-500 font-bold px-6 py-2 rounded-full flex items-center justify-center transition duration-300 ease-in-out"
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
