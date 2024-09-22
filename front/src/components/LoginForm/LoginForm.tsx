"use client";
import { useContext, useEffect, useState } from "react";
import Button from "../Button/Button";
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

const LoginForm = () => {
  // Contexto de autenticación y router
  const { setUser } = useContext(AuthContext);
  const router = useRouter();

  // Estados para manejar la carga, datos del formulario, errores y campos tocados
  const [isLoading, setIsLoading] = useState(false);
  const initialData: Data = { email: "", password: "" };
  const [data, setData] = useState(initialData);
  const [errors, setErrors] = useState(initialData);
  const [dirty, setDirty] = useState<DirtyState>({
    email: false,
    password: false,
  });

  // manejar el envío del formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Marcar todos los campos como tocados
    setDirty((prevDirty) =>
      Object.keys(prevDirty).reduce(
        (acc, key) => ({
          ...acc,
          [key]: true,
        }),
        { ...prevDirty },
      ),
    );

    // Verificar si hay errores
    const hasErrors = Object.values(errors).some((error) => error !== "");
    if (hasErrors) {
      MySwal.fire({
        title: <p>Please correct the errors in the form</p>,
        icon: "error",
      });
      return;
    }

    setIsLoading(true);

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      const response = await loginService(apiUrl + "/users/login", data);

      if (response.login) {
        MySwal.fire({
          title: <p>Login Successful!</p>,
          icon: "success",
        });
        setUser(response);
        // Redirigir al usuario después de un login exitoso
        setTimeout(() => {
          router.back();
        }, 2000);
      } else {
        MySwal.fire({
          title: <p>{response.message || "Invalid email or password"}</p>,
          icon: "error",
        });
      }
    } catch (error) {
      console.error("Login error:", error);
      MySwal.fire({
        title: <p>An error occurred during login. Please try again later.</p>,
        icon: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Manejadores de eventos para cambios en los inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setDirty({ ...dirty, [e.target.name]: true });
  };

  // validar los campos del formulario
  useEffect(() => {
    setErrors({
      email: validateEmail(data.email),
      password: validatePassword(data.password),
    });
  }, [data]);

  // mostrar el componente de carga si isLoading es true
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
        placeholder="example@example.com"
        id="email"
        name="email"
        value={data.email}
        onChange={handleChange}
        onBlur={handleBlur}
        className={`block rounded-md bg-primary/10 p-3 text-primary ${
          errors.email ? "border-red-500" : "border-transparent"
        }`}
      />
      {dirty.email && errors.email ? (
        <p className="text-red-500">{errors.email}</p>
      ) : null}

      <label
        htmlFor="password"
        className="block text-lg font-semibold text-quinary"
      >
        Password
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
          errors.password ? "border-red-500" : "border-transparent"
        }`}
      />
      {dirty.password && errors.password ? (
        <p className="text-red-500">{errors.password}</p>
      ) : null}

      <Button
        className="mt-6 w-full rounded-md bg-primary py-3 font-bold text-white shadow-md transition-all duration-300 hover:border-primary hover:bg-secondary hover:text-primary hover:shadow-lg"
        variant="secondary"
        type="submit"
      >
        Login
      </Button>

      <Link
        className="mt-4 text-center text-sm text-primary transition-colors duration-300 hover:text-secondary"
        href="/register"
      >
        Don't have an account?
      </Link>
    </form>
  );
};

export default LoginForm;
