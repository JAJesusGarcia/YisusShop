"use client";
import { UserSession } from "@/interfaces/forms";
import React, { createContext, useState, useEffect } from "react";

interface AuthProviderProps {
  children: React.ReactNode;
}

interface AuthContextProps {
  user: UserSession | null;
  setUser: (user: UserSession | null) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextProps>({
  user: null,
  setUser: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [userState, setUserState] = useState<UserSession | null>(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const storedUser = localStorage.getItem("user");
      console.log("Initial stored user:", storedUser); // Debug log
      return storedUser ? (JSON.parse(storedUser) as UserSession) : null;
    }
    return null;
  });

  const setUser = (newUser: UserSession | null) => {
    console.log("Setting new user:", newUser); // Debug log
    if (newUser) {
      localStorage.setItem("user", JSON.stringify(newUser));
    } else {
      localStorage.removeItem("user");
    }
    setUserState(newUser);
  };

  const logout = () => {
    console.log("Logging out"); // Debug log
    localStorage.removeItem("user");
    localStorage.removeItem("cart");
    setUserState(null);
    // Disparar un evento personalizado para notificar a otros componentes
    window.dispatchEvent(new Event("userLogout"));
  };

  useEffect(() => {
    const localUser = localStorage.getItem("user");
    if (localUser) {
      setUser(JSON.parse(localUser));
    }
  }, []);

  useEffect(() => {
    console.log("Current user state:", userState); // Debug log
  }, [userState]);

  return (
    <AuthContext.Provider value={{ user: userState, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
