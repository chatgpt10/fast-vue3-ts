// 登陆接口
import http from "@/service/http";
import * as T from "./types";

export const loginApi: T.ILoginApi = {
	login(params) {
		return http.post("/login", params);
	}
};
// 高德天气Api
export const getWeatherApi = {
	getWeather() {
		return http.get("/gd");
	}
};
// export default loginApi;
