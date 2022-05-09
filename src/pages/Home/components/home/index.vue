<template>
  <div class="homeContainer">
    <a-row class="grid-demo" :gutter="{ md: 8, lg: 24, xl: 32 }">
      <a-col :span="4">
        <InfoDescription :cardInfoData="cardInfoData" />
      </a-col>
      <a-col :span="4">
        <InfoDescription :cardInfoData="cardInfoData" />
      </a-col>
      <a-col :span="4">
        <InfoDescription :cardInfoData="cardInfoData" />
      </a-col>
      <a-col :span="4">
        <InfoDescription :cardInfoData="cardInfoData" />
      </a-col>
      <a-col :span="4">
        <div>col - 4</div>
      </a-col>
      <a-col :span="4">
        <div>col - 4</div>
      </a-col>
    </a-row>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import InfoDescription from "@/components/InfoDescription/index.vue";
// 定义props数据
const cardInfoData = reactive({
  cardSvgName: "viteLogo",
  cardName: "Vite2.9",
  cardHref: "https://github.com/vitejs/vite",
  cardDes:
    "下一代前端开发与构建工具,极速的服务启动,轻量快速的热重载,丰富的功能...",
  carColorFirst: "#51bcff",
  carColorLast: "#b241fe",
});
</script>

<style lang="less" scoped>
.grid-demo .arco-col {
  height: 380px;
  color: var(--color-white);
}
</style>
