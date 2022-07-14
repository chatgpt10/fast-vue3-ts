<template>
	<el-table :data="tableData" height="250" style="width: 100%; height: 700px" border>
		<el-table-column prop="name" label="名字" width="180" />
		<el-table-column prop="sex" label="性别" width="180" v-slot="scope"> {{ scope.row.sex === 1 ? "男" : "女" }}</el-table-column>
		<el-table-column prop="age" label="年龄" width="180" />
		<el-table-column prop="city" label="地址" />
		<el-table-column label="操作" width="280">
			<div style="display: flex; justify-content: space-evenly">
				<span>编辑</span>
				<span>修改</span>
				<span>删除</span>
			</div>
		</el-table-column>
	</el-table>
</template>

<script lang="ts" setup>
import { cardDataApi } from "@/api/home";
import { ref } from "vue";
let tableData = ref();
async function getTableDataList() {
	const { data } = await cardDataApi.getTableData();
	tableData.value = data.list;
}
getTableDataList();
</script>

<style scoped lang="less"></style>
