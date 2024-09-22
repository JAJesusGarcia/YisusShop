"use client";
import { useEffect, useState } from "react";
import Button from "../Button/Button";
import {
  validateEmail,
  validatePassword,
  validateAddress,
  validatePhone,
  validateName,
} from "../../helpers/validation";
import { IRegisterForm as Data } from "../../interfaces/forms";
import { registerService } from "@/services/authServices";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

interface DirtyState {
  email: boolean;
  password: boolean;
  address: boolean;
  phone: boolean;
  name: boolean;
}

const RegisterForm = () => {
  const router = useRouter();

  // Estados iniciales para el formulario
  const initialData: Data = {
    email: "",
    password: "",
    address: "",
    phone: "",
    name: "",
  };

  // Estados para manejar datos del formulario, errores y campos tocados
  const [data, setData] = useState<Data>(initialData);
  const [errors, setErrors] = useState<Data>(initialData);
  const [dirty, setDirty] = useState<DirtyState>({
    email: false,
    password: false,
    address: false,
    phone: false,
    name: false,
  });

  // envío del formulario
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

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      const response = await registerService(apiUrl + "/users/register", data);
      console.log(response);

      if (response.register) {
        MySwal.fire({
          title: <p>You are Registered!</p>,
          icon: "success",
        });
        setTimeout(() => {
          router.push("/login"); // Redirige al login tras 2 segundos
        }, 2000);
      } else {
        MySwal.fire({
          title: (
            <p>
              {response.message || "Registration failed. Please try again."}
            </p>
          ),
          icon: "error",
        });
      }
    } catch (error) {
      console.error("Registration error:", error);
      MySwal.fire({
        title: (
          <p>An error occurred during registration. Please try again later.</p>
        ),
        icon: "error",
      });
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
      name: validateName(data.name),
      phone: validatePhone(data.phone),
      address: validateAddress(data.address),
    });
  }, [data]);

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

      <label
        htmlFor="name"
        className="block text-lg font-semibold text-quinary"
      >
        Name
      </label>
      <input
        type="text"
        placeholder="Name"
        id="name"
        name="name"
        value={data.name}
        onChange={handleChange}
        onBlur={handleBlur}
        className={`block rounded-md bg-primary/10 p-3 text-primary ${
          errors.name ? "border-red-500" : "border-transparent"
        }`}
      />
      {dirty.name && errors.name ? (
        <p className="text-red-500">{errors.name}</p>
      ) : null}

      <label
        htmlFor="phone"
        className="block text-lg font-semibold text-quinary"
      >
        Phone
      </label>
      <input
        type="tel"
        placeholder="Phone"
        id="phone"
        name="phone"
        value={data.phone}
        onChange={handleChange}
        onBlur={handleBlur}
        className={`block rounded-md bg-primary/10 p-3 text-primary ${
          errors.phone ? "border-red-500" : "border-transparent"
        }`}
      />
      {dirty.phone && errors.phone ? (
        <p className="text-red-500">{errors.phone}</p>
      ) : null}

      <label
        htmlFor="address"
        className="block text-lg font-semibold text-quinary"
      >
        Address
      </label>
      <input
        type="text"
        placeholder="Address"
        id="address"
        name="address"
        value={data.address}
        onChange={handleChange}
        onBlur={handleBlur}
        className={`block rounded-md bg-primary/10 p-3 text-primary ${
          errors.address ? "border-red-500" : "border-transparent"
        }`}
      />
      {dirty.address && errors.address ? (
        <p className="text-red-500">{errors.address}</p>
      ) : null}
      <Button
        className="mt-6 w-full rounded-md bg-primary py-3 font-bold text-white shadow-md transition-all duration-300 hover:border-primary hover:bg-secondary hover:text-primary hover:shadow-lg"
        variant="secondary"
        type="submit"
      >
        Register
      </Button>
    </form>
  );
};

export default RegisterForm;
