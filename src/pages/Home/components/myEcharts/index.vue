<template>
	<el-row :gutter="5">
		<el-col :span="6"><div class="echarts" id="mainBar" style="height: 400px; width: 100%"></div></el-col>
		<el-col :span="6"><div class="echarts" id="mainPie" style="height: 400px; width: 100%"></div></el-col>

		<el-col :span="6"><div class="echarts" id="main" style="height: 300px; width: 300px"></div></el-col>
		<el-col :span="6"><div class="echarts" id="main" style="height: 300px; width: 300px"></div></el-col>
	</el-row>
</template>

<script setup lang="ts">
import * as echarts from "echarts/core";
import {
	GridComponent,
	GridComponentOption,
	TooltipComponent,
	ToolboxComponent,
	ToolboxComponentOption,
	LegendComponent,
	LegendComponentOption
} from "echarts/components";
import { BarChart, BarSeriesOption, PieChart, PieSeriesOption } from "echarts/charts";
import { LabelLayout } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";
//注意这里引入了onMounted这个钩子，等会有用
import { onMounted } from "vue";
import { useEcharts } from "@/hooks/useEcharts";
echarts.use([
	GridComponent,
	BarChart,
	CanvasRenderer,
	TooltipComponent,
	ToolboxComponent,
	LegendComponent,
	PieChart,
	CanvasRenderer,
	LabelLayout
]);

type EChartsOption = echarts.ComposeOption<
	GridComponentOption | BarSeriesOption | ToolboxComponentOption | LegendComponentOption | PieSeriesOption
>;
// 柱状图
const echartsInitBar = () => {
	let chartDom = document.getElementById("mainBar")!;
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
		],
		tooltip: {}
	};

	useEcharts(myChart, option);
};
// 饼状图
const echartsInitPie = () => {
	let chartDom = document.getElementById("mainPie")!;
	let myChart = echarts.init(chartDom);
	let option: EChartsOption;

	option = {
		legend: {
			top: "bottom"
		},
		toolbox: {
			show: true,
			feature: {
				mark: { show: true },
				dataView: { show: true, readOnly: false },
				restore: { show: true },
				saveAsImage: { show: true }
			}
		},
		series: [
			{
				name: "Nightingale Chart",
				type: "pie",
				radius: [20, 100],
				center: ["50%", "50%"],
				roseType: "area",
				itemStyle: {
					borderRadius: 8
				},
				data: [
					{ value: 40, name: "rose 1" },
					{ value: 38, name: "rose 2" },
					{ value: 32, name: "rose 3" },
					{ value: 30, name: "rose 4" },
					{ value: 28, name: "rose 5" }
				]
			}
		]
	};
	useEcharts(myChart, option);
};
onMounted(() => {
	echartsInitBar();
	echartsInitPie();
});
</script>

<style lang="less" scoped></style>
