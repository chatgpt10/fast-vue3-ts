// 登陆接口
import http from "@/service/http";
import * as T from "./types";

export const loginApi: T.ILoginApi = {
  login(params) {
    return http.post("/api/login", params);
  },
};
// export default loginApi;
