import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { isLogin } from "@/utils/auth";
import { Message } from "@arco-design/web-vue";
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/pages/Home/index.vue"), // 注意这里要带上 文件后缀.vue
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/pages/Login/index.vue"), // 注意这里要带上 文件后缀.vue
  },
  {
    path: "/test",
    name: "Test",
    component: () => import("@/pages/Test/index.vue"), // 注意这里要带上 文件后缀.vue
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
// 路由守卫
router.beforeEach((to, from, next) => {
  // eslint-disable-next-line eqeqeq
  if (to.path == "/login" || to.path == "/register") {
    next();
  } else {
    // eslint-disable eqeqeq
    if (isLogin()) {
      next();
    } else {
      next("/login");
      Message.warning("Token失效,请重新登录!");
    }
  }
});

export default router;

// title:string; 页面标题，通常必选。
// icon?:string; 图标，一般配合菜单使用。
// auth?:boolean; 是否需要登录权限。
// ignoreAuth?:boolean; 是否忽略权限。
// roles?:RoleEnum[]; 可以访问的角色
// keepAlive?:boolean; 是否开启页面缓存
// hideMenu?:boolean; 有些路由我们并不想在菜单中显示，比如某些编辑页面。
// order?:number; 菜单排序。
// frameUrl?:string; 嵌套外链。
