<template>
  <div class="navTop">
    <div class="userInfo">
      <a-avatar :size="60">
        <img alt="avatar" :src="avatarUrl" />
      </a-avatar>
      <span style="margin-left: 10px">{{ useUser.$state.username }}</span>
    </div>
  </div>
  <div class="container">
    <a-tabs default-active-key="2" type="rounded">
      <a-tab-pane key="1" title="Tab 1">
        <template #title>Home</template>
        <home />
      </a-tab-pane>
      <a-tab-pane key="2" title="Tab 2"> Content of Tab Panel 2 </a-tab-pane>
      <a-tab-pane key="3">
        <template #title>Tab 3</template>
        <SvgIcon name="heSuan" />
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script setup lang="ts">
import home from "./components/home/index.vue";
import { useUserStore } from "@/store";
const useUser = useUserStore();
const avatarUrl = useUser.$state.avatar;
console.log("avatarUrl", avatarUrl);
console.log(useUser.$state);
</script>

<style scoped lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.navTop {
  height: 60px;
  padding: 10px;
  /*
  background-color: pink;
  */
  display: flex;
  justify-content: flex-end;

  .userInfo {
    background-color: gold;
    width: 300px;
    border-radius: 50px 10px 10px 50px;
  }
}

.container {
  /*background-color: rgba(203, 98, 116, 0.784);*/

  :deep(.arco-tabs-nav-tab) {
    justify-content: center;
  }

  :deep(.arco-tabs-tab) {
    font-size: 20px;
    font-weight: 600;
  }

  :deep(.arco-tabs-content) {
    padding: 20px;
  }
}

.grid-demo .arco-col {
  height: 48px;
  color: var(--color-white);
}

.grid-demo {
  .arco-col {
    div {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
    }
  }
}

.grid-demo .arco-col:nth-child(2n) {
  div {
    background-color: rgba(var(--arcoblue-6), 0.9);
  }
}

.grid-demo .arco-col:nth-child(2n + 1) {
  div {
    background-color: var(--color-primary-light-4);
  }
}
</style>
