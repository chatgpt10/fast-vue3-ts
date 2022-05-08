<template>
  <div class="weatherContainer">
    <SvgIcon :name="weatherName" />
    {{ weatherData.city }}
    {{ weatherData.reporttime }}
    {{ weatherData.weather }}
    <span>风向:</span>{{ weatherData.winddirection }}
  </div>
</template>

<script setup lang="ts">
import { getWeatherApi } from "@/api/user";
import { reactive, ref } from "vue";
interface weatherType {
  city: string;
  reporttime: string;
  weather: string;
  winddirection: string;
}
const weatherData: weatherType = reactive({
  city: "北京",
  reporttime: "2099-05-08 16:01:09",
  weather: "阴天",
  winddirection: "东北",
});
async function getWeather() {
  const { lives } = await getWeatherApi.getWeather();
  weatherData.city = lives[0].city;
  weatherData.reporttime = lives[0].reporttime.slice(0, 10);
  weatherData.weather = lives[0].weather;
  weatherData.winddirection = lives[0].winddirection;
  getWeatherName();
}
getWeather();
let weatherName = ref("qing");
function getWeatherName() {
  if (weatherData.weather == "晴") {
    weatherName.value = "qing";
  } else if (weatherData.weather == "多云") {
    weatherName.value = "duoyun";
    // eslint-disable-next-line no-constant-condition
  } else if (weatherData.weather === "大雨" || "小雨" || "中雨") {
    weatherName.value = "dayu";
  } else if (weatherData.weather === "阴天") {
    weatherName.value = "yin";
  } else {
    weatherName.value = "wumai";
  }
}
</script>

<style lang="less" scoped>
.weatherContainer {
  width: 300px;
  z-index: 99;
}
</style>
