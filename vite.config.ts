// npm install @types/node --save-dev  处理报错
// yarn prettier 格式化全局文档

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// 配置别名
import path from "path";
import Components from "unplugin-vue-components/vite";
// UI库
import { ArcoResolver } from "unplugin-vue-components/resolvers";
// svg封装插件
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      // UI库
      resolvers: [ArcoResolver()],
    }),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
      // 指定symbolId格式
      symbolId: "icon-[dir]-[name]",

      /**
       * 自定义插入位置
       * @default: body-last
       */
      // inject?: 'body-last' | 'body-first'

      /**
       * custom dom id
       * @default: __svg__icons__dom__
       */
      // customDomId: '__svg__icons__dom__',
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
  // server
  server: {
    hmr: { overlay: false }, // 禁用或配置 HMR 连接 设置 server.hmr.overlay 为 false 可以禁用服务器错误遮罩层
    // 服务配置
    // port: VITE_PORT, // 类型： number 指定服务器端口;
    open: false, // 类型： boolean | string在服务器启动时自动在浏览器中打开应用程序；
    cors: false, // 类型： boolean | CorsOptions 为开发服务器配置 CORS。默认启用并允许任何源
    host: "0.0.0.0", // IP配置，支持从IP启动
    proxy: {},
  },
  build: {
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
});
