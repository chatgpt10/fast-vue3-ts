<template>
  <div class="homeContainer">
    <a-row class="grid-demo" :gutter="{ md: 8, lg: 24, xl: 32 }">
      <!-- <a-col :span="4">
        <InfoDescription :cardInfoData="cardInfoData" />
      </a-col> -->
      <a-col :key="index" :span="4" v-for="(item, index) in cardInfoData">
        <InfoDescription :cardInfoData="item" />
      </a-col>
    </a-row>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs } from "vue";
import InfoDescription from "@/components/InfoDescription/index.vue";
import { cardDataApi } from "@/api/home";
// 定义props数据
// const cardInfoData = reactive({
//   cardSvgName: "viteLogo",
//   cardName: "Vite2.9",
//   cardHref: "https://github.com/vitejs/vite",
//   cardDes:
//     "下一代前端开发与构建工具,极速的服务启动,轻量快速的热重载,丰富的功能...",
//   carColorFirst: "#51bcff",
//   carColorLast: "#b241fe",
// });
const cardInfoData = ref([]);

async function getCardInfoData() {
  const { data } = await cardDataApi.cardData();
  console.log(data);

  cardInfoData.value = data.list;
  console.log(cardInfoData.value);
}
getCardInfoData();
</script>

<style lang="less" scoped>
.grid-demo .arco-col {
  height: 380px;
  color: var(--color-white);
}
</style>
