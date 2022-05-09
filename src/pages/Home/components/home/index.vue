<template>
  <div class="homeContainer">
    <a-row class="grid-demo" :gutter="{ md: 8, lg: 24, xl: 32 }">
      <a-col :span="4">
        <InfoDescription />
      </a-col>
      <a-col :span="4">
        <div>col - 4</div>
      </a-col>
      <a-col :span="4">
        <div>col - 4</div>
      </a-col>
      <a-col :span="4">
        <div>col - 4</div>
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
import InfoDescription from "@/components/InfoDescription/index.vue";
</script>

<style lang="less" scoped>
.grid-demo .arco-col {
  height: 380px;
  color: var(--color-white);
}
</style>
