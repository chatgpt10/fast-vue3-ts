<template>
	<div class="rateContainer">
		<h1>评分</h1>
		<slotTemplate :value="2"> <template #header> 口味评价 </template> <template #main> 口味 </template> </slotTemplate>
		<slotTemplate> <template #main> 送餐速度 </template> </slotTemplate>
		<slotTemplate> <template #main> 价格 </template> </slotTemplate>
		<slotTemplate> <template #main> 快递 </template> </slotTemplate>
	</div>
</template>

<script lang="ts" setup>
import slotTemplate from "@/components/slot_template/index.vue";
</script>

<style scoped lang="less"></style>
