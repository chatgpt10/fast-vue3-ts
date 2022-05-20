<template>
  <button class="btn btn-primary" @click="helloWorldShow = !helloWorldShow">
    显示与隐藏
  </button>
  <br />
  <transition>
    <hello-world v-if="helloWorldShow" msg="【一碗周】过渡动画演示demo" />
  </transition>
</template>

<script setup>
import { ref } from "vue";
import HelloWorld from "./helloWorld.vue";
const helloWorldShow = ref(true);
</script>

<style scoped lang="less">
/* 离开和进入过程中的样式 */
.v-enter-active {
  animation: pulse 1.5s;
}
.v-leave-active {
  animation: pulse 1.5s;
}
</style>
