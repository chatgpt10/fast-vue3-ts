<template>
	<div class="navTop">
		<icon-sun-fill size="30px" @click="toggleDark()" />
		<div class="userInfo">
			<span style="margin-left: 60px; color: #165dff; font-weight: 600" @click="btnLogout">退出登录</span>
			<Weather />
			<div class="userName">
				<a-avatar :size="60">
					<img alt="avatar" :src="avatarUrl" />
				</a-avatar>
				<span style="margin-left: 10px">{{ useUser.$state.username }}</span>
			</div>
		</div>
	</div>
	<div class="container">
		<a-tabs default-active-key="4" type="rounded" @tab-click="TabClick">
			<a-tab-pane key="1" title="Tab 1">
				<template #title>Home</template>
				<Transition name="fade" :appear="true">
					<home v-show="transitionHome" />
				</Transition>
			</a-tab-pane>
			<a-tab-pane key="2" title="Tab 2">
				<rate />
			</a-tab-pane>
			<a-tab-pane key="3" title="Tab 3">
				<tableHooks />
			</a-tab-pane>
			<a-tab-pane key="4" title="Tab 4">
				<myEcharts />
			</a-tab-pane>
		</a-tabs>
	</div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import home from "./components/Home/index.vue";
import rate from "./components/rate/index.vue";
import myEcharts from "./components/myEcharts/index.vue";
import tableHooks from "./components/tableHooks/index.vue";
// import Weather from "@/components/weather/Weather.vue";
import { useUserStore } from "@/store";
import { useRouter } from "vue-router";
// 工具库
import { useDark, useToggle } from "@vueuse/core";
const useUser = useUserStore();
const router = useRouter();
const avatarUrl = useUser.$state.avatar;
// console.log("avatarUrl", avatarUrl);
// console.log(useUser.$state);
// 退出登录
function btnLogout() {
	console.log("name");
	useUser.logout();
	// 路由跳转
	router.push("/login");
}
const transitionHome = ref(true);
// function TabClick(e: number) {
// 	console.log(e);
// 	if (e == 1) {
// 		transitionHome.value = true;
// 		console.log(transitionHome.value);
// 	} else {
// 		transitionHome.value = false;
// 	}
// }
// 切换tab栏 显示动画效果
const TabClick = (key: any) => {
	if (key == 1) {
		transitionHome.value = true;
		console.log(transitionHome.value);
	} else {
		transitionHome.value = false;
	}
};
// 主题更换
const isDark = useDark({
	selector: "body",
	attribute: "arco-theme",
	valueDark: "dark",
	valueLight: "light",
	storageKey: "arco-theme"
	// onChanged(dark: boolean) {
	// 	// overridden default behavior
	// 	appStore.toggleTheme(dark);
	// }
});
// console.log(isDark);

const toggleDark = useToggle(isDark);
</script>

<style scoped lang="less">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}

.navTop {
	height: 60px;
	padding: 10px;
	/*
  background-color: pink;
  */
	display: flex;
	justify-content: flex-end;

	.userInfo {
		background-color: gold;
		width: 500px;
		border-radius: 50px 10px 10px 50px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		position: relative;
		cursor: pointer;

		.userName {
			width: 160px;
			background-color: gold;
			position: absolute;
			height: 60px;
			top: 0;
			left: 1px;
			border-radius: 30px;
			transition: left 1s;
		}

		&:hover {
			.userName {
				left: -110px;
			}
		}
	}
	.arco-icon {
		margin: 20px 10px 0 0;
		cursor: pointer;
	}
}

.container {
	/*background-color: rgba(203, 98, 116, 0.784);*/

	:deep(.arco-tabs-nav-tab) {
		justify-content: center;
	}

	:deep(.arco-tabs-tab) {
		font-size: 20px;
		font-weight: 600;
	}

	:deep(.arco-tabs-content) {
		padding: 20px;
	}
}

.grid-demo .arco-col {
	height: 48px;
	color: var(--color-white);
}

.grid-demo {
	.arco-col {
		div {
			display: flex;
			align-items: center;
			justify-content: center;
			height: 100%;
		}
	}
}

.grid-demo .arco-col:nth-child(2n) {
	div {
		background-color: rgba(var(--arcoblue-6), 0.9);
	}
}

.grid-demo .arco-col:nth-child(2n + 1) {
	div {
		background-color: var(--color-primary-light-4);
	}
}
/* 离开和进入过程中的样式 */
.fade-enter-active {
	animation: bounceInLeft 2.5s;
}
</style>
