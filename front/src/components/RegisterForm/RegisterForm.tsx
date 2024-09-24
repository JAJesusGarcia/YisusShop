"use client";
import { useEffect, useState } from "react";
import {
  validateEmail,
  validatePassword,
  validateAddress,
  validatePhone,
  validateName,
} from "../../helpers/validation";
import { IRegisterFormData, IRegisterSubmitData } from "../../interfaces/forms";
import { registerService } from "@/services/authServices";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

interface DirtyState {
  email: boolean;
  password: boolean;
  confirmPassword: boolean;
  address: boolean;
  phone: boolean;
  name: boolean;
}

const RegisterForm = () => {
  const router = useRouter();

  // Estados iniciales para el formulario
  const initialData: IRegisterFormData = {
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
    phone: "",
    name: "",
  };

  // Estados para manejar datos del formulario, errores y campos tocados
  const [data, setData] = useState<IRegisterFormData>(initialData);
  const [errors, setErrors] = useState<IRegisterFormData>(initialData);
  const [dirty, setDirty] = useState<DirtyState>({
    email: false,
    password: false,
    confirmPassword: false,
    address: false,
    phone: false,
    name: false,
  });

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
      timer: 1000,
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
      showAlert("Por favor, corrige los errores en el formulario", "error");
      return;
    }

    // Verificar si las contraseñas coinciden
    if (data.password !== data.confirmPassword) {
      showAlert("Las contraseñas no coinciden", "error");
      return;
    }

    // Envío del formulario si no hay errores
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      const { confirmPassword, ...submitData } = data;
      const response = await registerService(
        apiUrl + "/users/register",
        submitData as IRegisterSubmitData,
      );
      console.log(response);

      if (!response.register) {
        showAlert("¡Te has registrado exitosamente!", "success", () => {
          router.push("/login");
        });
      } else {
        showAlert(
          response.message || "El registro falló. Por favor, intenta de nuevo.",
          "error",
        );
      }
    } catch (error) {
      console.error("Error de registro:", error);
      showAlert(
        "Ocurrió un error durante el registro. Por favor, intenta de nuevo más tarde.",
        "error",
      );
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
      confirmPassword:
        data.password !== data.confirmPassword
          ? "Las contraseñas no coinciden"
          : "",
      name: validateName(data.name),
      phone: validatePhone(data.phone),
      address: validateAddress(data.address),
    });
  }, [data]);

  return (
    <form className="mx-auto my-20 flex w-full max-w-md flex-col gap-6 rounded-3xl border border-primary/80 bg-secondary/50 p-8 shadow-lg">
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

      {/* Campo de confirmar contraseña */}
      <label
        htmlFor="confirmPassword"
        className="block text-lg font-semibold text-quinary"
      >
        Confirm Password
      </label>
      <input
        type="password"
        placeholder="********"
        id="confirmPassword"
        name="confirmPassword"
        value={data.confirmPassword}
        onChange={handleChange}
        onBlur={handleBlur}
        className={`block rounded-md bg-primary/10 p-3 text-primary ${
          errors.confirmPassword ? "border-red-500" : "border-transparent"
        }`}
      />
      {dirty.confirmPassword && errors.confirmPassword && (
        <p className="text-red-500">{errors.confirmPassword}</p>
      )}

      {/* Botón de registro */}
      <button
        className="relative z-10 mt-10 rounded border-2 border-primary bg-primary px-4 py-2 font-bold text-secondary transition-all duration-300 hover:scale-105 hover:border-primary hover:bg-secondary hover:text-primary active:scale-100"
        onClick={handleSubmit}
      >
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
