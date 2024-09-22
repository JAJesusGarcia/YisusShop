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

const RegisterForm = () => {
  const router = useRouter();

  const initialData: Data = {
    email: "",
    password: "",
    address: "",
    phone: "",
    name: "",
  };
  const initiualDirty = {
    email: false,
    password: false,
    address: false,
    phone: false,
    name: false,
  };

  const [data, setData] = useState(initialData);
  const [errors, setErrors] = useState(initialData);
  const [dirty, setDirty] = useState(initiualDirty);

  const handleSubmit = async () => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const response = await registerService(apiUrl + "/users/register", data);
    console.log(response);
    if (!response.register) {
      // alert('You are Registred!');
      MySwal.fire({
        title: <p>You are Registred!</p>,
        icon: "success",
      });
      router.back();
    } else {
      // alert(response.message);
      MySwal.fire({
        title: <p>{response.message}</p>,
        icon: "error",
      });
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
      name: validateName(data.name),
      phone: validatePhone(data.phone),
      address: validateAddress(data.address),
    });
  }, [data]);

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mb-20 mt-20 flex w-full max-w-md flex-col gap-6 rounded-3xl border border-primary/80 bg-secondary/50 p-8 pt-8 shadow-lg"
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
      {dirty.email ? <p className="text-red-500">{errors.email}</p> : null}
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
      {dirty.password ? (
        <p className="text-red-500">{errors.password}</p>
      ) : null}
      <label
        htmlFor="phone"
        className="block text-lg font-semibold text-quinary"
      >
        Name
      </label>
      <input
        type="string"
        placeholder="name"
        id="name"
        name="name"
        value={data.name}
        onChange={handleChange}
        onBlur={handleBlur}
        className={`block rounded-md bg-primary/10 p-3 text-primary ${
          errors.name ? "border-red-500" : "border-transparent"
        }`}
      />
      {dirty.name ? <p className="text-red-500">{errors.name}</p> : null}
      <label
        htmlFor="phone"
        className="block text-lg font-semibold text-quinary"
      >
        Phone
      </label>
      <input
        type="phone"
        placeholder="phone"
        id="phone"
        name="phone"
        value={data.phone}
        onChange={handleChange}
        onBlur={handleBlur}
        className={`block rounded-md bg-primary/10 p-3 text-primary ${
          errors.phone ? "border-red-500" : "border-transparent"
        }`}
      />
      {dirty.phone ? <p className="text-red-500">{errors.phone}</p> : null}
      <label
        htmlFor="address"
        className="block text-lg font-semibold text-quinary"
      >
        Address
      </label>
      <input
        type="text"
        placeholder="address"
        id="address"
        name="address"
        value={data.address}
        onChange={handleChange}
        onBlur={handleBlur}
        className={`block rounded-md bg-primary/10 p-3 text-primary ${
          errors.address ? "border-red-500" : "border-transparent"
        }`}
      />
      {dirty.address ? <p className="text-red-500">{errors.address}</p> : null}

      <Button
        className="mt-6 w-full rounded-md bg-primary py-3 font-bold text-white shadow-md transition-all duration-300 hover:border-primary hover:bg-secondary hover:text-primary hover:shadow-lg"
        variant="secondary"
        onClick={handleSubmit}
      >
        Register
      </Button>
    </form>
  );
};

export default RegisterForm;
