<template>
	<div class="Container">
		<div class="logo">
			<div class="round1">
				<!-- <div class="findWord">{{ store.ProjectName }}</div> -->
			</div>
			<div class="round2"></div>
			<div class="round3">
				<!-- Vue3 Vite TS -->
			</div>
		</div>
		<!-- 登陆表单 -->
		<div class="loginFrom">
			<a-form :model="form" :style="{ width: '310px' }" @submit="handleSubmit">
				<a-form-item field="username" label="账号">
					<a-input v-model="form.username" placeholder="请输入账号" />
				</a-form-item>
				<a-form-item field="password" label="密码">
					<a-input-password v-model="form.password" placeholder="请输入密码" />
				</a-form-item>
				<a-form-item field="isRead">
					<a-checkbox v-model="isRead"> 同意用户协议 </a-checkbox>
				</a-form-item>
				<a-form-item>
					<a-button html-type="submit" :disabled="!isRead">登录</a-button>
				</a-form-item>
				<a-form-item>
					<span class="remind">*此处使用的UI框架是ArcoDesign</span>
				</a-form-item>
			</a-form>
		</div>
	</div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { useUserStore } from "@/store/index";
import { useRouter } from "vue-router";
// 消息提示
import { Message } from "@arco-design/web-vue";
// import { IconFaceSmileFill } from "@arco-design/web-vue/es/icon";
const router = useRouter();
const useStore = useUserStore();
const form = reactive({
	username: "admin",
	password: "123456!!"
});
const isRead = ref(false);
// 登陆按钮
async function handleSubmit() {
	try {
		await useStore.login(form);
		router.push("/");
		Message.success("登录成功,欢迎使用!");
	} catch (e) {
		console.log(e);
	}
}
</script>

<style scoped lang="less">
.Container {
	background-color: #61616111;
	height: 100vh;
	position: relative;

	.round1 {
		position: absolute;
		top: 200px;
		left: 200px;
		width: 400px;
		height: 400px;
		background-color: #030094;
		border-radius: 50%;
		animation: roundAnimation 5s infinite;
		transform-origin: 20% 20%;

		.findWord {
			margin: 100px;
			font-size: 25px;
			color: white;
			font-weight: 600;
		}
	}

	.round2 {
		position: absolute;
		top: 300px;
		left: 300px;
		width: 400px;
		height: 400px;
		background-color: #747579;
		border-radius: 50%;
		z-index: -1;
		animation: roundAnimation 5s infinite;
		transform-origin: 80% 80%;
	}

	.round3 {
		position: absolute;
		top: 400px;
		left: 400px;
		width: 300px;
		height: 300px;
		background-color: #d58813;
		border-radius: 50%;
		animation: roundAnimation 5s infinite;
		transform-origin: 40% 40%;
	}

	@keyframes roundAnimation {
		0% {
			transform: rotate(0deg);
		}

		100% {
			transform: rotate(360deg);
		}
	}

	.loginFrom {
		float: right;
		padding: 20px;
		margin: 200px;
		width: 400px;
		height: 230px;
		background-color: #f0960eb4;
		border-radius: 10px;

		.remind {
			color: rgb(116, 115, 115);
			font-size: 12px;
		}
	}
}
</style>
