<template>
	<div class="directivesContainer">
		<span class="text">节流指令 🍇🍇🍇🍓🍓🍓</span>
		<el-button type="primary" v-throttle="throttleClick">节流按钮 (每隔1S秒后执行)</el-button>
	</div>
</template>

<script lang="ts" setup>
import { ElMessage } from "element-plus";
const throttleClick = () => {
	ElMessage.success("我是节流按钮触发的事件 🍍🍓🍌");
};
</script>

<style scoped lang="less"></style>
