"use client";

import { AuthContext } from "@/context/authContext";
import { useRouter } from "next/navigation";
import React, { useEffect, useContext } from "react";
import Button from "../Button/Button";

const Favorites = () => {
  const { user } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!user || !user.login) {
      router.push("/login");
    }
  }, [user, router]);

  return (
    <div className="my-10 p-5 text-center">
      <div>
        <h1 className="text-bold text-quinary">
          Bienvenidos a tu lista de favoritos!
        </h1>

        <Button
          href="/products"
          className="relative z-10 mt-10 rounded border-2 border-primary bg-primary px-4 py-2 font-bold text-secondary transition-all duration-300 hover:scale-105 hover:border-primary hover:bg-secondary hover:text-primary active:scale-100"
        >
          ver todos los productos !
        </Button>

        <div></div>
      </div>
    </div>
  );
};

export default Favorites;
