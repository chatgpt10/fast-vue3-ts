import { createApp } from "vue";
import App from "./App.vue";
// 路由 router 4.0
import router from "./router/router";
// 状态管理器  Pinia
import { createPinia } from "pinia";
const pinia = createPinia();
createApp(App).use(router).use(pinia).mount("#app");
