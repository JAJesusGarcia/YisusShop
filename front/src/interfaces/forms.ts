export interface ILoginForm {
  email: string;
  password: string;
}

export interface IOrder {
  id: number;
  status: string;
  date: string;
}
export interface IRegisterForm {
  address: string;
  email: string;
  password: string;
  phone: string;
  name: string;
  userId?: number;
  orders?: IOrder[];
}

export interface UserSession {
  login: boolean;
  user: IRegisterForm;
  token: string;
  name: string;
}
