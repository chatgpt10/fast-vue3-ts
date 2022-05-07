<template>
  <div>这里是天气插件</div>
</template>

<script setup lang="ts">
import axios from "axios";
axios({
  method: "get",
  url: "https://restapi.amap.com/v3/weather/weatherInfo?city=110000&key=556446c31b8ed3d4c948aaf74904a788",
  responseType: "stream",
}).then((res) => {
  console.log(res);
});
</script>

<style lang="less" scoped></style>
