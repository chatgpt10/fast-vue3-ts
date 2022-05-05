// 类型文件
export type RoleType = "" | "*" | "admin" | "user";
export interface UserState {
  user_id?: string;
  user_name?: string;
  avatar?: string;
  token?: string;
}
