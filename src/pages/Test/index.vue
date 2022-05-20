<template>
  <button class="btn btn-primary" @click="helloWorldShow = !helloWorldShow">
    显示与隐藏
  </button>
  <br />
  <transition name="fade">
    <hello-world v-if="helloWorldShow" />
  </transition>
</template>

<script setup>
import { ref } from "vue";
import HelloWorld from "./helloWorld.vue";
const helloWorldShow = ref(true);
</script>

<style scoped lang="less">
/* 离开和进入过程中的样式 */
.fade-enter-active {
  animation: pulse 1.5s;
}
.fade-leave-active {
  animation: zoomOutDown 1.5s;
}
</style>
