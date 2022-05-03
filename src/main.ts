import { createApp } from "vue";
import App from "./service/api/App.vue";
import router from "./router/router";
createApp(App).use(router).mount("#app");
