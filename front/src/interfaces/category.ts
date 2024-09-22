import { IProduct } from "./products";

export interface ICategory {
  id: number;
  name: string;
  products?: IProduct[];
}
