<template>
  <div class="Container">
    <div class="logo">
      <div class="round1">
        <div class="findWord">{{ store.ProjectName }}</div>
      </div>
      <div class="round2"></div>
      <div class="round3">
        <!-- Vue3 Vite TS -->
      </div>
    </div>
    <div class="loginFrom"></div>
  </div>
</template>

<script setup lang="ts">
import { mainStore } from "@/store/index";
const store = mainStore();
</script>

<style scoped lang="less">
.Container {
  background-color: #61616111;
  height: 100vh;
  position: relative;

  .round1 {
    position: absolute;
    top: 200px;
    left: 200px;
    width: 400px;
    height: 400px;
    background-color: #030094;
    border-radius: 50%;
    animation: roundAnimation 5s infinite;
    transform-origin: 20% 20%;

    .findWord {
      margin: 100px;
      font-size: 25px;
      color: white;
      font-weight: 600;
    }
  }

  .round2 {
    position: absolute;
    top: 300px;
    left: 300px;
    width: 400px;
    height: 400px;
    background-color: #747579;
    border-radius: 50%;
    z-index: -1;
    animation: roundAnimation 5s infinite;
    transform-origin: 80% 80%;
  }

  .round3 {
    position: absolute;
    top: 400px;
    left: 400px;
    width: 300px;
    height: 300px;
    background-color: #d58813;
    border-radius: 50%;
    animation: roundAnimation 5s infinite;
    transform-origin: 40% 40%;
  }

  @keyframes roundAnimation {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
