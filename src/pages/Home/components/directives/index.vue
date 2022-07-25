<template>
	<div class="directivesContainer">
		<span class="text">🍇🍇🍇🍓🍓🍓</span>
		<el-button type="primary" v-throttle="throttleClick">节流按钮</el-button>
		<el-button type="primary" v-throttle="waringTips">节流警告</el-button>
		<span class="text">🍇🍇🍇🍓🍓🍓</span>
		<el-button type="success" v-debounce="debounceClick">防抖按钮</el-button>
		<el-button type="success" v-debounce="debounceClick">防抖警告</el-button>
	</div>
</template>

<script lang="ts" setup>
import { ElMessage } from "element-plus";
const throttleClick = () => {
	ElMessage.success("节流消息");
};
const waringTips = () => {
	ElMessage.warning("节流警告");
};
const debounceClick = () => {
	ElMessage.warning("防抖消息");
};
</script>

<style scoped lang="less"></style>
