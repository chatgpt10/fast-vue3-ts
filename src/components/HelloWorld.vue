<template>
  <div class="container">
    <h1>这里是欢迎页面</h1>
    <h2>GUCCI</h2>
    <div class="test">
      <h3>你好</h3>
      <h4>less全局变量</h4>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped lang="less">
.container {
  background-color: gold;

  .test {
    background-color: red;
  }

  h4 {
    color: rgb(67, 67, 67);
  }
}
</style>
