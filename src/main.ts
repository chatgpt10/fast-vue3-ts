import { createApp } from "vue";
import App from "./App.vue";
// 路由 router 4.0
import router from "./router/router";
// 状态管理器  Pinia
import { createPinia } from "pinia";
const pinia = createPinia();
/// Pinia 数据持久化
import piniaPersist from "pinia-plugin-persist";
pinia.use(piniaPersist);
// UI库 ardo.design
import ArcoVue from "@arco-design/web-vue";
import "@arco-design/web-vue/dist/arco.css";
// svg封装插件
import SvgIcon from "@/components/SvgIcon.vue";
import "virtual:svg-icons-register";
createApp(App)
  .use(router)
  .use(pinia)
  .component("svg-icon", SvgIcon)
  .use(ArcoVue, {
    componentPrefix: "arco",
  })
  .mount("#app");
