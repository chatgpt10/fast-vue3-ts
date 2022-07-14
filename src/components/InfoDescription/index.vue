<template>
	<!-- Home页描述卡片 -->
	<div class="infoDescriptionCard">
		<div class="infoHeader">
			<SvgIcon :name="cardInfoData.cardSvgName" />
		</div>
		<div class="infoBody">
			<div>
				<h3 style="display: inline-block">{{ cardInfoData.cardName }}</h3>
				<a :href="cardInfoData.cardHref" style="float: right">
					<SvgIcon name="GitHub" />
				</a>
			</div>
			<span>
				{{ cardInfoData.cardDes }}
			</span>
		</div>
	</div>
</template>
<script lang="ts" setup>
import { ref, reactive } from "vue";
const props = defineProps({
	cardInfoData: {
		type: Object,
		default: null
	}
});
// console.log(props.cardInfoData);
</script>
<style scoped lang="less">
.infoDescriptionCard {
	border-radius: 10px;
	display: flex;
	align-items: stretch;
	justify-content: center;
	height: 100%;
	flex-direction: column;
	overflow: hidden;
	border: 1px solid #ddd;
	box-shadow: 2px 0px #c5c5c5;

	.infoHeader {
		height: 250px;
		display: flex;

		.svg-icon-spin {
			width: 150px;
			height: 100%;
			margin: 0 auto;
		}
	}

	.infoBody {
		flex: 1;
		padding: 10px;
		/*
        background-image: linear-gradient(to right, #51bcff, #b241fe);
        */
		background-image: linear-gradient(to right, v-bind("cardInfoData.carColorFirst"), v-bind("cardInfoData.carColorLast"));

		.svg-icon-spin {
			width: 30px;
			margin: 0 auto;
		}
	}
}
</style>
