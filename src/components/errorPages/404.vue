<template>
	<div class="errorContainer">
		<img src="@/assets/404.jpg" alt="" />
	</div>
	<div class="text">
		<div class="goBack">
			<h2 @click="goBack()">404(GoBack)</h2>
		</div>
	</div>
</template>
<script lang="ts" setup>
import { useRouter } from "vue-router";
const router = useRouter();
function goBack() {
	router.push("/");
}
</script>
<style sc oped lang="less">
.errorContainer {
	border-radius: 10px;
	overflow: hidden;
	width: 800px;
	height: 400px;
	margin: 150px auto;
}
.text {
	display: flex;
	flex-direction: row;
	justify-content: center;
	h2 {
		font-size: 28px;
		color: rgb(172, 172, 172);
		cursor: pointer;
	}
}
</style>
