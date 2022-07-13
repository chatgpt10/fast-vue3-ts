// 处理token
const TokenKey = "FAST-VUE3-TS";
const TokenPrefix = "Bearer"; // token前缀
// 登陆状态
const isLogin = () => {
	return !!localStorage.getItem(TokenKey);
};
// 设置token
const setToken = (token: string) => {
	return localStorage.setItem(TokenKey, token);
};
// 获取token
const getToken = () => {
	return localStorage.getItem(TokenKey);
};
// 清除token
const clearToken = () => {
	return localStorage.removeItem(TokenKey);
};
export { TokenPrefix, isLogin, setToken, getToken, clearToken };
