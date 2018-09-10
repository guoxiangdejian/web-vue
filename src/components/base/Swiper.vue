<template>
	<div class="block">
		<span class="demonstration"></span>
		<el-carousel :interval="5000" height="150px">
			<el-carousel-item v-for="(swiper,index) in swipers" :key="index">
				<router-link to="/shopclass" tag="img" :src="swiper.imgsrc"/>
			</el-carousel-item>
		</el-carousel>
	</div>
</template>
<script type="text/javascript">
	export default {
		data() {
			return {}
		},
		props:['swipers'],
		methods: {

		},
		computed: {

		},
		components: {

		}
	}
</script>
<style scoped lang="less">
.block{
	position: relative;
	left: 0;
	top: 0;
	width: 100%;
	height: auto;
}
	.el-carousel__item img {
		width: 100%;
		height: 100%;
	}
	
	.el-carousel__item:nth-child(2n) {
		background-color: #99a9bf;
	}
	
	.el-carousel__item:nth-child(2n+1) {
		background-color: #d3dce6;
	}
</style>