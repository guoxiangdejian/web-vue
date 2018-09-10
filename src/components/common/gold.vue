<template>
	<div class="content">
		<div class="main">
			<div class="money">
				原来你还在这里  已获得10元现金
			</div>
			<button class="HomePageApp-Rjabi">立即赚现金</button>
			<div class="moneyStrategy">
				<i class="iconfont icon-youhuiquan"></i>
				<span>查看赚钱攻略></span>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		data() {
			return {}
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
		position: absolute;
		width: 100vw;
		min-height: 100vh;
		top: 0;
		left: 0;
		background:#fe2b04 url(http://shadow.elemecdn.com/faas/h5/static/app_bg.19a2977.png) 0 0 no-repeat;
		background-size: 100% auto;
		padding-top: 117.333333vw;
	}
	
	.main {
		position: relative;
		width: 100%;
		justify-content: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		button {
			margin-bottom: 8.533333vw;
			width: 74.666667vw;
			height: 13.333333vw;
			border-radius: 6.666667vw;
			background-image: linear-gradient(180deg, #fcfac4, #f4d170 41%, #e4b043);
			box-shadow: 0 0.533333vw 1.333333vw 0 rgba(163, 0, 0, .5);
			color: #561b04;
			font-weight: 700;
			border: none;
			font-size: 5vw;
		}
		.money,.moneyStrategy{
			color: #FFFDEF;
			font-size: 3vw;
			margin-bottom: 3vw;
		}
		.moneyStrategy{
			i{
				font-size: 5vw;
			}
			span{
				font-size: 4.2vw;
			}
		}
	}
</style>