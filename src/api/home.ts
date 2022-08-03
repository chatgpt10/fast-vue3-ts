// 登陆接口
import http from "@/service/http";
// import * as T from "./types";

export const cardDataApi = {
	cardData() {
		return http.get("/card_data");
	},
	getTableData() {
		return http.get("/getTableData");
	},
	tableEdit() {
		return http.get("/tableEdit");
	},
	tableChange() {
		return http.get("/tableChange");
	},
	tableDelete() {
		return http.get("/getTableData");
	}
};
