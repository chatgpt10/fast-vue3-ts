<template>
  <div class="homeContainer">
    <a-row class="grid-demo" :gutter="{ md: 8, lg: 24, xl: 32 }">
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
/* 离开和进入过程中的样式 
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}
*/
</style>
