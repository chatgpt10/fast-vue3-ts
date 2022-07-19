<template>
	<el-row :gutter="5">
		<el-col :span="6"><div class="echarts" id="main" style="height: 300px; width: 100%"></div></el-col>
		<el-col :span="6"><div class="echarts" id="main2" style="height: 300px; width: 300px"></div></el-col>
		<el-col :span="6"><div class="echarts" id="main" style="height: 300px; width: 300px"></div></el-col>
		<el-col :span="6"><div class="echarts" id="main" style="height: 300px; width: 300px"></div></el-col>
	</el-row>
</template>

<script setup lang="ts">
import * as echarts from "echarts/core";
import { GridComponent, GridComponentOption } from "echarts/components";
import { BarChart, BarSeriesOption } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
//注意这里引入了onMounted这个钩子，等会有用
import { onMounted } from "vue";
import { useEcharts } from "@/hooks/useEcharts";
echarts.use([GridComponent, BarChart, CanvasRenderer]);

type EChartsOption = echarts.ComposeOption<GridComponentOption | BarSeriesOption>;

const echartsInit = () => {
	let chartDom = document.getElementById("main")!;
	let myChart = echarts.init(chartDom);
	let option: EChartsOption;

	option = {
		xAxis: {
			type: "category",
			data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
		},
		yAxis: {
			type: "value"
		},
		series: [
			{
				data: [120, 200, 150, 80, 70, 110, 130],
				type: "bar"
			}
		]
	};

	// option && myChart.setOption(option);
	// window.onresize = function () {
	// 	//自适应大小, 不用的话不会自适应大小。
	// 	myChart.resize();
	// };

	useEcharts(myChart, option);
};

onMounted(() => {
	echartsInit();
});
</script>

<style lang="less" scoped></style>
