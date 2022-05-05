import { defineStore } from "pinia";
import { loginApi } from "@/api/user";
import { setToken, clearToken } from "@/utils/auth";
import { UserState, LoginData } from "./types";

export const useUserStore = defineStore("user", {
  state: (): UserState => ({
    user_id: undefined,
    user_name: undefined,
    avatar: undefined,
    token: undefined,
  }),
  getters: {},
  actions: {
    // 异步登陆实现token存储

    async login(loginForm: LoginData) {
      const { data } = await loginApi.login(loginForm);
      const token = data.userInfo?.token;
      if (token) {
        setToken(token);
      }
      return data;
    },
  },
});
