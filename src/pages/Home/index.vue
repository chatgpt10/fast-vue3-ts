<template>
  <a-avatar :size="204">
    <img alt="avatar" :src="avatarUrl" />
  </a-avatar>
  <div>
    <h1>你好</h1>
    <a-button type="primary">Primary</a-button>
  </div>
  <div></div>
  <img alt="Vue logo" src="@/assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <SvgIcon name="heSuan" />
  router
</template>
<script setup lang="ts">
import HelloWorld from "@/components/HelloWorld.vue";
// 引入pinia
import { useUserStore } from "@/store";
const useUser = useUserStore();
const avatarUrl = useUser.$state.avatar;
console.log("avatarUrl", avatarUrl);

console.log(useUser.$state);
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
