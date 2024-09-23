"use client";
import { useEffect, useState } from "react";
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

  // Envío del formulario
  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
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
        backdrop: true,
        toast: true,
        position: "center",
      });
      return;
    }

    // Envío del formulario si no hay errores
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      const response = await registerService(apiUrl + "/users/register", data);
      console.log(response);

      if (!response.register) {
        // SweetAlert de éxito y redirección al login
        MySwal.fire({
          title: <p>You are Registered!</p>,
          icon: "success",
          backdrop: true,
          toast: true,
          position: "center",
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

  // Validar los campos del formulario
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
    <form className="mx-auto my-20 flex w-full max-w-md flex-col gap-6 rounded-3xl border border-primary/80 bg-secondary/50 p-8 shadow-lg">
      {/* Campo de email */}
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
      {dirty.email && errors.email && (
        <p className="text-red-500">{errors.email}</p>
      )}

      {/* Campo de contraseña */}
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
      {dirty.password && errors.password && (
        <p className="text-red-500">{errors.password}</p>
      )}

      {/* Campo de nombre */}
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
      {dirty.name && errors.name && (
        <p className="text-red-500">{errors.name}</p>
      )}

      {/* Campo de teléfono */}
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
      {dirty.phone && errors.phone && (
        <p className="text-red-500">{errors.phone}</p>
      )}

      {/* Campo de dirección */}
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
      {dirty.address && errors.address && (
        <p className="text-red-500">{errors.address}</p>
      )}

      {/* Botón de registro */}
      <button
        className="relative z-10 mt-10 rounded border-2 border-primary bg-primary px-4 py-2 font-bold text-secondary transition-all duration-300 hover:scale-105 hover:border-primary hover:bg-secondary hover:text-primary active:scale-100"
        onClick={handleSubmit} // Usamos onClick aquí para el botón regular
      >
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
