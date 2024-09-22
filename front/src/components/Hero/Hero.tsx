"use client";
import Button from "../Button/Button";
import { useContext, useEffect, useState } from "react";
import style from "./Hero.module.css";
import { AuthContext } from "@/context/authContext";

const Hero = () => {
  const { user } = useContext(AuthContext);

  const [isAnimated, setIsAnimated] = useState(false);

  // Aplicar la animación cuando el componente se monte
  useEffect(() => {
    setIsAnimated(true);
  }, []);

  // Función para obtener el mensaje de bienvenida
  const getWelcomeMessage = () => {
    console.log("Current user state:", user); // Debug log
    if (user && user.user && user.user.name) {
      return `Welcome to my online shop, ${user.user.name}!`;
    }
    return "Welcome to my online shop!";
  };

  useEffect(() => {
    console.log("Hero component mounted. User:", user); // Debug log
  }, [user]);

  return (
    <header
      className={`relative flex h-[70vh] flex-col items-center justify-center bg-secondary ${style["hero-background"]}`}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <h4
        className={`relative z-10 text-center text-6xl text-quinary ${
          isAnimated ? style["animate-slide-in"] : ""
        }`}
      >
        {getWelcomeMessage()}
      </h4>

      {/* Debug info */}
      {/* <div className="text-white text-sm mt-4 relative z-10">
        Debug: User info - {user ? JSON.stringify(user) : 'No user'}
      </div> */}

      <Button
        className={`relative z-10 mt-10 border-primary bg-primary font-bold text-secondary hover:border-primary hover:bg-secondary hover:text-primary ${
          isAnimated ? style["animate-slide-in"] : ""
        }`}
        onClick={() => console.log("clicked")}
        href="/products"
      >
        Shop NOW!
      </Button>
    </header>
  );
};

export default Hero;
