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