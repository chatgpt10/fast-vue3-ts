import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
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
