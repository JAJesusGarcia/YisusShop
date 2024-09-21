'use client';
import { useContext, useEffect, useState } from 'react';
import Button from '../Button/Button';
import { validateEmail, validatePassword } from '../../helpers/validation';
import Link from 'next/link';
import { ILoginForm as Data } from '../../interfaces/forms';
import { loginService } from '@/services/authServices';
import { useRouter } from 'next/navigation';
import { AuthContext } from '@/context/authContext';
import Loading from '@/app/loading';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const LoginForm = () => {
  const { setUser } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const initialData: Data = { email: '', password: '' };
  const initialDirty = { email: false, password: false };

  const [data, setData] = useState(initialData);
  const [errors, setErrors] = useState(initialData);
  const [dirty, setDirty] = useState(initialDirty);

  const handleSubmit = async () => {
    setIsLoading(true); // Inicia el estado de carga
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const response = await loginService(apiUrl + '/users/login', data);

    if (response.login) {
      MySwal.fire({
        title: <p>Login Successful!</p>,
        icon: 'success',
        // didOpen: () => {
        //   MySwal.showLoading();
        //   setTimeout(() => {
        //     MySwal.close();
        //   }, 1000);
        // },
      });
      setUser(response);
      // No redirigimos inmediatamente, dejamos que el efecto se encargue
    } else {
      // alert('User or Credentials Wrong!');
      MySwal.fire({
        title: <p>User or Credentials Wrong!</p>,
        icon: 'error',
      });
      setIsLoading(false); // Desactiva el estado de carga si hay un error
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

  useEffect(() => {
    if (isLoading) {
      // Simula un retraso antes de redirigir
      const timer = setTimeout(() => {
        router.back(); // Usa router.back() como en tu versión original
      }, 2000); // 2 segundos de retraso, ajusta según necesites

      return () => clearTimeout(timer);
    }
  }, [isLoading, router]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      className="flex flex-col w-full max-w-md mx-auto pt-8 gap-6 mt-20 mb-20 border border-primary/80 rounded-3xl shadow-lg bg-secondary/50 p-8"
    >
      <label
        htmlFor="email"
        className="block text-lg text-quinary font-semibold"
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
        className={`block bg-primary/10 text-primary p-3 rounded-md ${
          errors.email ? 'border-red-500' : 'border-transparent'
        }`}
      />
      {dirty.email ? <p className="text-red-500">{errors.email}</p> : null}
      <label
        htmlFor="password"
        className="block text-lg text-quinary font-semibold"
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
        className={`block bg-primary/10 text-primary p-3 rounded-md ${
          errors.password ? 'border-red-500' : 'border-transparent'
        }`}
      />
      {dirty.password ? (
        <p className="text-red-500">{errors.password}</p>
      ) : null}
      <Button
        className="mt-6 w-full py-3 text-white bg-primary hover:bg-secondary hover:border-primary hover:text-primary transition-all duration-300 font-bold rounded-md shadow-md hover:shadow-lg"
        variant="secondary"
        onClick={handleSubmit}
      >
        Login
      </Button>
      <Link
        className="mt-4 text-center text-sm text-primary hover:text-secondary transition-colors duration-300"
        href="/register"
      >
        Don't have an account?
      </Link>
    </form>
  );
};

export default LoginForm;
