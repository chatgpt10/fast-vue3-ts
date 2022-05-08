<template>
    <div class="weatherContainer">
        {{ weatherData.city }}
        {{ weatherData.reporttime }}
        {{ weatherData.weather }}
        <span>风向:</span>{{ weatherData.winddirection }}
    </div>
</template>

<script setup lang="ts">
import { getWeatherApi } from "@/api/user";
import { reactive } from "vue";
// 原始请求：有跨域问题
// import axios from "axios";
// axios({
//   method: "get",
//   url: "https://restapi.amap.com/v3/weather/weatherInfo?city=110000&key=556446c31b8ed3d4c948aaf74904a788",
//   responseType: "stream",
// }).then((res) => {
//   console.log(res);
// });
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
    console.log(lives[0]);
    weatherData.city = lives[0].city
    weatherData.reporttime = lives[0].reporttime.slice(0, 10)
    weatherData.weather = lives[0].weather
    weatherData.winddirection = lives[0].winddirection
}
getWeather();
// setInterval(() => {
//     getWeather()
// }, 1000*)
</script>

<style lang="less" scoped>
</style>
