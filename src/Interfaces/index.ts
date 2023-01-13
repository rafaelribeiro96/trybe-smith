export interface User {
  id?: number,
  username: string,
  vocation: string,
  level: number,
  password: string,
}

export interface Response {
  type: number | null;
  message: string | unknown;
}

export interface Product {
  id?: number;
  name: string;
  amount: string;
}

export interface Order {
  id: number;
  userId: number;
  productsIds: number[];
}