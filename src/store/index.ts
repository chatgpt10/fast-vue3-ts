// pinia主文件
import { defineStore } from "pinia";
export const mainStore = defineStore("main", {
  state: () => {
    return {
      ProjectName: "FAST VUE3 TS...",
    };
  },
  getters: {},
  actions: {},
});
