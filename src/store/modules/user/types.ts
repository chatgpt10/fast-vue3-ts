// 类型文件
export type RoleType = "" | "*" | "admin" | "user";
export interface UserState {
  username?: string;
  email?: string;
  avatar?: string;
  token?: string;
  address?: string;
}
export interface LoginData {
  username: string;
  password: string;
}
