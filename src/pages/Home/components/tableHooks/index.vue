<template>
	<el-table :data="tableData" height="250" style="width: 100%; height: 700px" border>
		<el-table-column type="selection" width="55" />
		<el-table-column prop="name" label="名字" width="180" />
		<el-table-column prop="sex" label="性别" width="180" v-slot="scope"> {{ scope.row.sex === 1 ? "男" : "女" }}</el-table-column>
		<el-table-column prop="age" label="年龄" width="180" />
		<el-table-column prop="city" label="地址" />
		<el-table-column label="操作" width="280" v-slot="scope">
			<div style="display: flex; justify-content: space-evenly" class="edit">
				<span @click="openDrawer('查看', scope.row)">查看</span>
				<span @click="openDrawer('编辑', scope.row)">编辑</span>
				<span @click="openDrawer('修改', scope.row)">修改</span>
				<span @click="openDrawer('删除', scope.row)">删除</span>
			</div>
		</el-table-column>
	</el-table>
	<!-- 用户弹窗 -->
	<TableDrawer ref="drawerRef" />
</template>

<script lang="ts" setup>
import { cardDataApi } from "@/api/home";
import { ref } from "vue";
import TableDrawer from "@/components/tableDrawer/index.vue";

let tableData = ref();
async function getTableDataList() {
	const { data } = await cardDataApi.getTableData();
	tableData.value = data.list;
}
getTableDataList();
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
// 打开 drawer(新增、查看、编辑)
interface DrawerExpose {
	acceptParams: (params: any) => void;
}
const drawerRef = ref<DrawerExpose>();
const openDrawer = (title: String, rowData: Partial<ResUserList> = {}) => {
	let params = {
		// 弹窗标题
		title: title,
		// 弹窗数据
		rowData: { ...rowData },
		// 查看弹窗没有修改按钮
		isView: title === "查看" ? false : true
	};
	drawerRef.value!.acceptParams(params);
};
</script>

<style scoped lang="less">
.edit {
	cursor: pointer;
}
</style>
