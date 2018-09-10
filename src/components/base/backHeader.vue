<template>
	<div class="bakck-header">
		<i class="iconfont icon-fanhui" @click="goback"></i>
		<slot></slot>
	</div>
</template>
<script type="text/javascript">
	export default {
		data() {
			return {}
		},
		methods: {
			goback(){
				this.$router.back(-1)
			}
		},
		computed: {

		},
		components: {

		}
	}
</script>
<style scoped lang="less">
	.bakck-header {
		width: 100%;
		position: relative;
		top: 0;
		left: 0;
		height: 11.733333vw;
		color: #fff;
		font-size: 4.5vw;
		background: #2395ff;
		text-align: center;
		line-height: 11vw;
		i{
			position: absolute;
			left: 3.4vw;
			font-size: 4vw;
		}
	}
</style>