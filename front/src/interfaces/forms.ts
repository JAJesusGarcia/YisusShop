// forms.ts

export interface ILoginForm {
  email: string;
  password: string;
}

export interface IOrder {
  id: number;
  status: string;
  date: string;
}

// This interface represents the form data including confirmPassword
export interface IRegisterFormData {
  address: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
  name: string;
}

// This interface represents the data sent to the server (without confirmPassword)
export interface IRegisterSubmitData {
  address: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
  name: string;
  userId?: number;
  orders?: IOrder[];
}

export interface UserSession {
  login: boolean;
  user: IRegisterSubmitData;
  token: string;
  name: string;
}
