import { defineStore } from "pinia";
import { loginApi } from "@/api/user";
import { setToken, clearToken } from "@/utils/auth";
import { UserState, LoginData } from "./types";

export const useUserStore = defineStore("user", {
  state: (): UserState => ({
    username: undefined,
    email: undefined,
    avatar: undefined,
    token: undefined,
    address: undefined,
  }),
  getters: {},
  actions: {
    // 设置用户信息
    setUserInfo(partial: Partial<UserState>) {
      this.$patch(partial);
      // console.log(this.$state);
    },
    // 清除用户信息
    resetInfo() {
      this.$reset();
    },
    // 异步登陆实现token存储
    async login(loginForm: LoginData) {
      const { data } = await loginApi.login(loginForm);
      const token = data.userInfo?.token;
      if (token) {
        setToken(token);
        console.log(data.userInfo);
        this.setUserInfo(data.userInfo);
      }
      return data;
    },
    // 退出登录清除token
    logout() {
      this.resetInfo();
      clearToken();
    },
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: "FastVue3Ts_user",
        storage: localStorage,
      },
    ],
  },
});
