<template>
	<div>
		<div class="content">
			<router-link to="/home">
				<i class="iconfont icon-shouye"></i>
				<span>首页</span>
			</router-link>
			<router-link to="/older">
				<i class="iconfont icon-icon-"></i>
				<span>订单</span>
			</router-link>
			<router-link to="/find">
				<i class="iconfont icon-faxian"></i>
				<span>发现</span>
			</router-link>
			<router-link to="/person">
				<i class="iconfont icon-wode"></i>
				<span>我的</span>
			</router-link>
		</div>
	</div>
</template>
<script type="text/javascript">
	
	export default {
		data() {
			return {title:'首页'}
		},
		methods: {

		},
		computed: {

		},
		components: {
			
		}
	}
</script>
<style scoped lang="less">
	.content {
		width: 100%;
		display: flex;
		position: fixed;
		bottom: 0;
		left: 0;
		background: #fff;
		z-index: 999;
		a {
			display: flex;
			color: #868686;
			flex-direction: column;
			flex: 1;
			text-align: center;
			text-decoration: none;
			i {
				font-size: 6vw;
			}
		}
		a.router-link-active {
			color: #00A9FF;
		}
	}
</style>