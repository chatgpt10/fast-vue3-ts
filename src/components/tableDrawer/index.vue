<template>
	<el-drawer v-model="drawerVisible" :destroy-on-close="true" size="600px">
		<template #header>
			<span style="font-weight: bold">{{ drawerData.title }}用户数据</span>
		</template>
		<el-form ref="ruleFormRef" label-width="100px" :model="drawerData.rowData">
			<el-form-item label="用户姓名" prop="username" clearable>
				<el-input v-model="drawerData.rowData!.name" placeholder="请填写用户姓名" :disabled="!drawerData.isView"></el-input>
			</el-form-item>
			<el-form-item label="用户性别" prop="username" clearable>
				<el-select v-model="drawerData.rowData!.sex" placeholder="请选择性别" :disabled="!drawerData.isView">
					<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
				</el-select>
			</el-form-item>
			<el-form-item label="用户年龄" prop="age" clearable>
				<el-input v-model="drawerData.rowData!.age" placeholder="请输入年龄" :disabled="!drawerData.isView"></el-input>
			</el-form-item>
			<el-form-item label="用户住址" prop="city" clearable>
				<el-input v-model="drawerData.rowData!.city" placeholder="请输入用户地址" :disabled="!drawerData.isView"></el-input>
			</el-form-item>
		</el-form>
		<template #footer>
			<el-button @click="drawerVisible = false">取消</el-button>
			<el-button type="primary" v-show="drawerData.isView" @click="handleSubmit">确定</el-button>
		</template>
	</el-drawer>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { cardDataApi } from "@/api/home";
import { Message } from "@arco-design/web-vue";
// 性别数据
const options = [
	{
		label: "男",
		value: 1
	},
	{
		label: "女",
		value: 2
	}
];
// type
interface ResUserList {
	id: string;
	name: string;
	sex: Number;
	age: number;
	idCard: string;
	email: string;
	city: string;
	createTime: string;
	status: number;
	avatar: string;
}
interface DrawerProps {
	title: string;
	isView: boolean;
	rowData?: ResUserList;
	url?: (params: any) => Promise<any>;
	getTableList?: () => Promise<any>;
}
interface DrawerProps {
	title: string;
	isView: boolean;
	rowData?: ResUserList;
	apiUrl?: (params: any) => Promise<any>;
	getTableList?: () => Promise<any>;
}

// drawer框状态
const drawerVisible = ref(false);
const drawerData = ref<DrawerProps>({
	isView: false,
	title: ""
});

// 接收父组件传过来的参数
const acceptParams = (params: DrawerProps): void => {
	console.log(params);
	drawerData.value = params;
	drawerVisible.value = true;
};
// 提交表单数据
const handleSubmit = async () => {
	// // console.log(data);
	if (drawerData.value.title === "编辑") {
		const { data } = await cardDataApi.tableEdit();
		Message.success(data.message);
	} else if (drawerData.value.title === "修改") {
		const { data } = await cardDataApi.tableChange();
		Message.success(data.message);
	} else if (drawerData.value.title === "删除") {
		await cardDataApi.tableDelete();
		Message.success("Giao");
	} else {
		Message.warning("出现错误,请重试!");
		drawerVisible.value = false;

		return;
	}
	drawerVisible.value = false;
};
defineExpose({
	acceptParams
});
</script>

<style scoped lang="less"></style>
