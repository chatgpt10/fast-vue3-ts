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
// 引入ElementPlus
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
// UI库 ardo.design
import ArcoVue from "@arco-design/web-vue";
import "@arco-design/web-vue/dist/arco.css";
import ArcoVueIcon from "@arco-design/web-vue/es/icon";
// svg封装插件
import SvgIcon from "@/components/SvgIcon.vue";
import "virtual:svg-icons-register";
// 自定义指令
import directives from "@/directives/index";
// 动画文件
import "animate.css";
createApp(App)
	.use(router)
	.use(pinia)
	.use(directives)
	.use(ElementPlus)
	.use(ArcoVueIcon)
	.component("svg-icon", SvgIcon)
	.use(ArcoVue, {
		componentPrefix: "arco"
	})
	.mount("#app");
