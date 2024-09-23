"use client";

import { useContext, useEffect, useState } from "react";
import { validateEmail, validatePassword } from "../../helpers/validation";
import Link from "next/link";
import { ILoginForm as Data } from "../../interfaces/forms";
import { loginService } from "@/services/authServices";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/context/authContext";
import Loading from "@/app/loading";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

interface DirtyState {
  email: boolean;
  password: boolean;
}

export default function LoginForm() {
  const { setUser } = useContext(AuthContext);
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const initialData: Data = { email: "", password: "" };
  const [data, setData] = useState(initialData);
  const [errors, setErrors] = useState(initialData);
  const [dirty, setDirty] = useState<DirtyState>({
    email: false,
    password: false,
  });

  useEffect(() => {
    // Store the referrer when the component mounts
    if (typeof window !== "undefined") {
      sessionStorage.setItem("loginReferrer", document.referrer);
    }
  }, []);

  const showAlert = (
    message: string,
    icon: "success" | "error",
    callback?: () => void,
  ) => {
    MySwal.fire({
      title: <p>{message}</p>,
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setDirty((prevDirty) =>
      Object.keys(prevDirty).reduce(
        (acc, key) => ({
          ...acc,
          [key]: true,
        }),
        { ...prevDirty } as DirtyState,
      ),
    );

    const hasErrors = Object.values(errors).some((error) => error !== "");
    if (hasErrors) {
      showAlert("Por favor, corrige los errores en el formulario", "error");
      return;
    }

    setIsLoading(true);

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      if (!apiUrl) throw new Error("API URL not defined");

      const response = await loginService(apiUrl + "/users/login", data);

      if (response.login) {
        showAlert("¡Inicio de sesión exitoso!", "success", () => {
          setUser(response);
          const referrer = sessionStorage.getItem("loginReferrer");
          if (referrer && referrer.includes("/register")) {
            router.push("/");
          } else {
            router.back();
          }
          sessionStorage.removeItem("loginReferrer");
        });
      } else {
        showAlert(response.message || "Email o contraseña inválidos", "error");
      }
    } catch (error) {
      console.error("Error de inicio de sesión:", error);
      showAlert(
        "Ocurrió un error durante el inicio de sesión. Por favor, intenta de nuevo más tarde.",
        "error",
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setDirty({ ...dirty, [e.target.name]: true });
  };

  useEffect(() => {
    setErrors({
      email: validateEmail(data.email),
      password: validatePassword(data.password),
    });
  }, [data]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto my-20 flex w-full max-w-md flex-col gap-6 rounded-3xl border border-primary/80 bg-secondary/50 p-8 shadow-lg"
    >
      <label
        htmlFor="email"
        className="block text-lg font-semibold text-quinary"
      >
        Email
      </label>
      <input
        type="email"
        placeholder="ejemplo@ejemplo.com"
        id="email"
        name="email"
        value={data.email}
        onChange={handleChange}
        onBlur={handleBlur}
        className={`block rounded-md bg-primary/10 p-3 text-primary ${
          errors.email && dirty.email ? "border-red-500" : "border-transparent"
        }`}
      />
      {dirty.email && errors.email && (
        <p className="text-red-500">{errors.email}</p>
      )}

      <label
        htmlFor="password"
        className="block text-lg font-semibold text-quinary"
      >
        Contraseña
      </label>
      <input
        type="password"
        placeholder="********"
        id="password"
        name="password"
        value={data.password}
        onChange={handleChange}
        onBlur={handleBlur}
        className={`block rounded-md bg-primary/10 p-3 text-primary ${
          errors.password && dirty.password
            ? "border-red-500"
            : "border-transparent"
        }`}
      />
      {dirty.password && errors.password && (
        <p className="text-red-500">{errors.password}</p>
      )}

      <button
        className="relative z-10 mt-10 rounded border-2 border-primary bg-primary px-4 py-2 font-bold text-secondary transition-all duration-300 hover:scale-105 hover:border-primary hover:bg-secondary hover:text-primary active:scale-100"
        type="submit"
      >
        Iniciar sesión
      </button>

      <Link
        className="mt-4 text-center text-sm text-primary transition-colors duration-300 hover:text-secondary"
        href="/register"
      >
        ¿No tienes una cuenta?
      </Link>
    </form>
  );
}
