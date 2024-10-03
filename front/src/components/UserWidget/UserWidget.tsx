"use client";

import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { Heart, User } from "lucide-react";
import { AiOutlineLogout } from "react-icons/ai";
import { AuthContext } from "@/context/authContext";

import { BiShoppingBag } from "react-icons/bi";
import { useRouter } from "next/navigation";
import { CartContext } from "@/context/CartContext";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const UserWidget: React.FC = () => {
  const { user, logout } = useContext(AuthContext);
  const { cart } = useContext(CartContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsLoggedIn(!!user);
  }, [user]);

  const handleLogout = async () => {
    const result = await MySwal.fire({
      title: <p>Are you sure you want to log out?</p>,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log out!",
      cancelButtonText: "Cancel",
    });

    // Si el usuario confirma, procede con el logout
    if (result.isConfirmed) {
      await logout(); // Ejecuta la función de deslogueo
      router.push("/"); // Redirige al usuario a la página principal
    }
  };

  return (
    <div className="flex gap-4">
      <div className="relative">
        <Link
          className="text-quinary transition-colors duration-500 hover:text-primary"
          href="/cart"
        >
          <BiShoppingBag size={24} />
          {cart.length > 0 && (
            <span className="absolute -right-2 -top-2 flex size-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">
              {cart.length}
            </span>
          )}
        </Link>
      </div>
      <Link
        className="text-quinary transition-colors duration-500 hover:text-primary"
        href="/favorites"
      >
        <Heart size={24} />
      </Link>

      {isLoggedIn ? (
        <button
          onClick={handleLogout}
          className="text-quinary hover:text-primary"
          aria-label="Logout"
        >
          <AiOutlineLogout size={24} />
        </button>
      ) : (
        <Link href="/login" className="text-quinary hover:text-primary">
          <User size={24} />
        </Link>
      )}
    </div>
  );
};

export default UserWidget;
