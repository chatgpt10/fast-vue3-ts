// npm install @types/node --save-dev  处理报错

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// 配置别名
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    // 配置别名
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  css:{
    preprocessorOptions:{
      less: {
        javascriptEnabled:true,
      }
    }
  }
});
