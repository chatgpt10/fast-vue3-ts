import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/pages/Home/index.vue'), // 注意这里要带上 文件后缀.vue
      },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/pages/Login/index.vue'), // 注意这里要带上 文件后缀.vue
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

