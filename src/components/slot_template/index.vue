<template>
	<div class="demo-rate-block">
		<header>
			<slot name="header">
				<span class="demonstration"></span>
			</slot>
		</header>
		<el-row>
			<el-col :span="17"><el-rate v-model="value" @change="rateChange" /></el-col>
			<main>
				<slot name="main"> <el-col :span="7"></el-col> </slot>
			</main>
		</el-row>
	</div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
	value: {
		type: null,
		default: 1
	}
});
const value = computed(() => props.value);

const rateChange = (key: any) => {
	console.log(key);
};
</script>

<style lang="less" scoped>
.demo-rate-block {
	padding: 30px 0;
	text-align: center;
	border-right: solid 1px var(--el-border-color);
	display: inline-block;
	width: 200px;
	box-sizing: border-box;
}
.demo-rate-block:last-child {
	border-right: none;
}
.demo-rate-block .demonstration {
	display: block;
	color: var(--el-text-color-secondary);
	font-size: 14px;
	margin-bottom: 20px;
}
.el-row {
	display: flex;
	position: relative;
	box-sizing: border-box;
	flex-direction: row;
	align-content: center;
	align-items: center;
}
</style>
