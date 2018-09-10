<template>
	<div class="content">
		<header>
			<backHeader>{{title}}</backHeader>
		</header>
		<main>
			<div class="userInfo">
				<div class="username">
					<span>用户名</span>
					<span>{{username}}</span>
				</div>
				<div class="telphone">
					<span><i class="el-icon-mobile-phone"></i>手机</span>
					<span>{{password}}</span>
				</div>
			</div>
		</main>
		<footer>
			<router-link @click.native="clearSess" to="/login" tag="div" class="quitLogin">
				<span>退出登录</span>
			</router-link>
		</footer>
	</div>
</template>
<script type="text/javascript">
	import backHeader from '../base/backHeader.vue'
	import store from '../../store/index.js'
	export default {
		data() {
			return {
				title: '个人信息',
				username: '',
				password: ''
			}
		},
		created() {

		},
		methods: {
			getIdData() {
				if(sessionStorage.getItem("user_name") && sessionStorage.getItem("tel_phone")) {
					this.username = sessionStorage.getItem("user_name");
					this.password = sessionStorage.getItem("tel_phone");
				}
			},
			clearSess(){
				sessionStorage.removeItem('user_name');
				sessionStorage.removeItem('tel_phone');
			}
		},
		computed: {

		},
		mounted() {
			this.getIdData()
		},
		components: {
			backHeader,
			store
		}
	}
</script>
<style scoped lang="less">
*{
	margin: 0;
	padding: 0;
}
.content{
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background-color:#f5f5f5;
}
	main{
		width: 100%;
		position: relative;
		top: 0vw;
		.username,.telphone{
			box-sizing: border-box;
			padding: 2vw;
			display: flex;
			width: 100%;
			justify-content: space-between;
			background-color: #fff;
			margin: 3vw 0;
		}
		i{
			font-size: 5vw;
			color: rgb(0, 151, 255);
		}
	}
	.quitLogin{
		width: 100%;
		position: relative;
		top: 0vw;
		text-align: center;
		margin: 10vw 0;
		padding: 2.5vw 0;
		color: #ff5339;
		background-color: #fff;
		font-size: 4.5vw;
		font-weight: 600;
	}
</style>