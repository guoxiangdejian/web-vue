<template>
	<div class="header">
		<div class="location">	
		<i class="iconfont icon-location"></i>
		<slot></slot>
		<i class="iconfont icon-xiabiao xiaobiao"></i>		
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		data(){
			return {}
		},
		methods:{
			
		},
		computed:{
			
		},
		components:{
			
		}
	}
</script>
<style scoped lang="less">
	.header{
		width: 100%;
		position: relative;
		top: 0;
		left: 0;
		z-index: 99;
		line-height: 40px;
		background: linear-gradient(left, #00AAFF , #0085FF);
		color: #FFF;
		display: flex;
		flex-direction:column ;
		justify-content: flex-start;
		.location{
			position: relative;
			left: 20px;
			width: 50%;
			display: flex;
			justify-content: flex-start;
			i{
				margin-right: 5px;
			}
		}
	}
	/*i{	
		position: absolute;
		left: 10px;
		top: 0;
		font-size: 20px;
	}*/
	
</style>