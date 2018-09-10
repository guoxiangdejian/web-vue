<template>
	<div class="content">
		<backHeader>{{title}}</backHeader>
		<div class="main">
			<div class="left">
				<i class="el-icon-service"></i>
				<span>在线客服</span>
			</div>
			<div class="right">
				<i class="el-icon-phone"></i>
				<span>在线客服</span>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	import backHeader from '../base/backHeader.vue';
	export default {
		data(){
			return {
				title:'服务中心'
			}
		},
		methods:{
			
		},
		computed:{
			
		},
		components:{
			backHeader
		}
	}
</script>
<style scoped lang="less">
	.content{
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: #F5F5F5;
	}
	.main{
		display: flex;
		width: 100%;		
		.left,.right{
			border-right: 1px solid #D3D3D3;
			height: 20vw;
			background-color: #FFFFFF;
			flex: 1;
			display: flex;
			justify-content: center;
			flex-direction: column;
			align-items: center;
			span{
				font-size: 4vw;
			}
		}
		.left{
			i{
				font-size: 8vw;
				color: #0085FF;
			}
		}
		.right{
			i{
				font-size: 8vw;
				color: lawngreen;
			}
			border:none;
		}
	}
</style>