import { createApp } from "vue";
import App from "./App.vue";
// 路由 router 4.0
import router from "./router/router";
// 状态管理器  Pinia
import { createPinia } from "pinia";
const pinia = createPinia();
// UI库 ardo.design
import ArcoVue from "@arco-design/web-vue";
import "@arco-design/web-vue/dist/arco.css";
createApp(App)
  .use(router)
  .use(pinia)
  .use(ArcoVue, {
    componentPrefix: "arco",
  })
  .mount("#app");
