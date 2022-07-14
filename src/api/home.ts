// 登陆接口
import http from "@/service/http";
// import * as T from "./types";

export const cardDataApi = {
	cardData() {
		return http.get("/api/card_data");
	},
	getTableData() {
		return http.get("/api/getTableData");
	}
};
