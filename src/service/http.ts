// 封装请求模块
import axios, { AxiosRequestConfig } from "axios";
// loading 效果
import NProgress from "nprogress";
import "nprogress/nprogress.css"; //这个样式必须引入
// 引入token相关文件
import { getToken, TokenPrefix } from "@/utils/auth";
// 配置核心文件~~

// 基准地址
// axios.defaults.baseURL = "/api";
axios.defaults.baseURL =
  "https://console-mock.apipost.cn/app/mock/project/811bc94e-011e-4b6b-e2a0-d963f1fd0dd3";
// 请求超时时间
axios.defaults.timeout = 5000;
// 请求头
axios.defaults.headers.post["Content-Type"] = "application/json;charset=UTF-8";
// 请求拦截器
axios.interceptors.request.use(
  (config): AxiosRequestConfig<any> => {
    // 获取本地token
    const token = getToken();
    // 有token直接放行
    if (token) {
      //@ts-ignore
      config.headers.Authorization = `${TokenPrefix} ${token}`;
    }

    return config;
  },
  (error) => {
    return error;
  }
);
// 响应拦截器
axios.interceptors.response.use((res) => {
  if (res.data.code === 111) {
    localStorage.setItem("token", "");
    // token过期操作
  }
  return res;
});

interface ResType<T> {
  code: number;
  data?: T;
  msg: string;
  err?: string;
}
interface Http {
  get<T>(url: string, params?: unknown): Promise<ResType<T>>;
  post<T>(url: string, params?: unknown): Promise<ResType<T>>;
  upload<T>(url: string, params: unknown): Promise<ResType<T>>;
  download(url: string): void;
}

const http: Http = {
  get(url, params) {
    return new Promise((resolve, reject) => {
      NProgress.start();
      console.log("NProgress");
      axios
        .get(url, { params })
        .then((res) => {
          NProgress.done();
          resolve(res.data);
        })
        .catch((err) => {
          NProgress.done();
          reject(err.data);
        });
    });
  },
  post(url, params) {
    return new Promise((resolve, reject) => {
      console.log("NProgress");
      NProgress.start();
      axios
        .post(url, JSON.stringify(params))
        .then((res) => {
          NProgress.done();
          resolve(res.data);
        })
        .catch((err) => {
          NProgress.done();
          reject(err.data);
        });
    });
  },
  upload(url, file) {
    return new Promise((resolve, reject) => {
      NProgress.start();
      axios
        .post(url, file, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((res) => {
          NProgress.done();
          resolve(res.data);
        })
        .catch((err) => {
          NProgress.done();
          reject(err.data);
        });
    });
  },
  download(url) {
    const iframe = document.createElement("iframe");
    iframe.style.display = "none";
    iframe.src = url;
    iframe.onload = function () {
      document.body.removeChild(iframe);
    };
    document.body.appendChild(iframe);
  },
};
export default http;
