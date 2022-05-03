// npm install @types/node --save-dev  处理报错
// yarn prettier 格式化全局文档

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// 配置别名
import path from "path";
import Components from "unplugin-vue-components/vite";
import { ArcoResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [ArcoResolver()],
    }),
  ],
  // plugins: [vue()],
  resolve: {
    // 配置别名
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  // 配置less
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        // 配置less 全局变量
        additionalData: '@import "@/assets/styles/index.less";',
      },
    },
  },
});
