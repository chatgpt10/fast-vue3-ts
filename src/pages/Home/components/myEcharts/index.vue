<template>
	<el-row :gutter="10">
		<el-col :span="6"><div class="echarts" id="mainBar" style="height: 400px; width: 100%"></div></el-col>
		<el-col :span="6"><div class="echarts" id="mainPie" style="height: 400px; width: 100%"></div></el-col>
		<el-col :span="6"><div class="echarts" id="mainLine" style="height: 400px; width: 100%"></div></el-col>
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
	LegendComponentOption,
	TitleComponent,
	TitleComponentOption,
	TooltipComponentOption
} from "echarts/components";
import { BarChart, BarSeriesOption, PieChart, PieSeriesOption, LineChart, LineSeriesOption } from "echarts/charts";
import { LabelLayout, UniversalTransition } from "echarts/features";
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
	LabelLayout,
	TitleComponent,
	TitleComponent,
	ToolboxComponent,
	TooltipComponent,
	GridComponent,
	LegendComponent,
	LineChart,
	CanvasRenderer,
	UniversalTransition
]);

type EChartsOption = echarts.ComposeOption<
	| GridComponentOption
	| BarSeriesOption
	| ToolboxComponentOption
	| LegendComponentOption
	| PieSeriesOption
	| TitleComponentOption
	| ToolboxComponentOption
	| TooltipComponentOption
	| GridComponentOption
	| LegendComponentOption
	| LineSeriesOption
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
// 折线图
const echartsInitLine = () => {
	let chartDom = document.getElementById("mainLine")!;
	let myChart = echarts.init(chartDom);
	let option: EChartsOption;

	option = {
		color: ["#80FFA5", "#00DDFF", "#37A2FF", "#FF0087", "#FFBF00"],

		tooltip: {
			trigger: "axis",
			axisPointer: {
				type: "cross",
				label: {
					backgroundColor: "#6a7985"
				}
			}
		},
		legend: {
			data: ["Line 1", "Line 2", "Line 3", "Line 4", "Line 5"]
		},
		toolbox: {
			feature: {
				saveAsImage: {}
			}
		},
		grid: {
			left: "3%",
			right: "4%",
			bottom: "3%",
			containLabel: true
		},
		xAxis: [
			{
				type: "category",
				boundaryGap: false,
				data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
			}
		],
		yAxis: [
			{
				type: "value"
			}
		],
		series: [
			{
				name: "Line 1",
				type: "line",
				stack: "Total",
				smooth: true,
				lineStyle: {
					width: 0
				},
				showSymbol: false,
				areaStyle: {
					opacity: 0.8,
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
						{
							offset: 0,
							color: "rgb(128, 255, 165)"
						},
						{
							offset: 1,
							color: "rgb(1, 191, 236)"
						}
					])
				},
				emphasis: {
					focus: "series"
				},
				data: [140, 232, 101, 264, 90, 340, 250]
			},
			{
				name: "Line 2",
				type: "line",
				stack: "Total",
				smooth: true,
				lineStyle: {
					width: 0
				},
				showSymbol: false,
				areaStyle: {
					opacity: 0.8,
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
						{
							offset: 0,
							color: "rgb(0, 221, 255)"
						},
						{
							offset: 1,
							color: "rgb(77, 119, 255)"
						}
					])
				},
				emphasis: {
					focus: "series"
				},
				data: [120, 282, 111, 234, 220, 340, 310]
			},
			{
				name: "Line 3",
				type: "line",
				stack: "Total",
				smooth: true,
				lineStyle: {
					width: 0
				},
				showSymbol: false,
				areaStyle: {
					opacity: 0.8,
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
						{
							offset: 0,
							color: "rgb(55, 162, 255)"
						},
						{
							offset: 1,
							color: "rgb(116, 21, 219)"
						}
					])
				},
				emphasis: {
					focus: "series"
				},
				data: [320, 132, 201, 334, 190, 130, 220]
			},
			{
				name: "Line 4",
				type: "line",
				stack: "Total",
				smooth: true,
				lineStyle: {
					width: 0
				},
				showSymbol: false,
				areaStyle: {
					opacity: 0.8,
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
						{
							offset: 0,
							color: "rgb(255, 0, 135)"
						},
						{
							offset: 1,
							color: "rgb(135, 0, 157)"
						}
					])
				},
				emphasis: {
					focus: "series"
				},
				data: [220, 402, 231, 134, 190, 230, 120]
			},
			{
				name: "Line 5",
				type: "line",
				stack: "Total",
				smooth: true,
				lineStyle: {
					width: 0
				},
				showSymbol: false,
				label: {
					show: true,
					position: "top"
				},
				areaStyle: {
					opacity: 0.8,
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
						{
							offset: 0,
							color: "rgb(255, 191, 0)"
						},
						{
							offset: 1,
							color: "rgb(224, 62, 76)"
						}
					])
				},
				emphasis: {
					focus: "series"
				},
				data: [220, 302, 181, 234, 210, 290, 150]
			}
		]
	};
	useEcharts(myChart, option);
};
onMounted(() => {
	echartsInitBar();
	echartsInitPie();
	echartsInitLine();
});
</script>

<style lang="less" scoped>
.echarts {
	background-color: rgba(202, 198, 198, 0.267);
	border-radius: 5px;
}
</style>
