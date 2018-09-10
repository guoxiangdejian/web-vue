<template>
	<div class="content">
		<header>
			<backHeader>{{title}}</backHeader>
		</header>
		<section>
			<div class="profile">
				<div class="headerPic">
					<img src="https://fuss10.elemecdn.com/8/5b/186319fdc4c8fdd1469b9f918876bjpeg.jpeg?imageMogr/format/webp/thumbnail/!198.91201171875002x198.91201171875002r/gravity/Center/crop/198.91201171875002x198.91201171875002/" />
				</div>
				<div class="loginReg" @click="isLogin">
					<h3>{{username}}</h3>
					<span class="youhui">					
						<i class="el-icon-mobile-phone"></i>
						<span>{{password}}</span>
					</span>
				</div>
				<div class="personInfo">
					<i class="iconfont icon-right-arrow"></i>
				</div>
			</div>
			<div class="mainInfo">
				<div class="money">
					<span class="moneyNum">0.00
					<span>元</span>
					</span>
					<span class="wallet">钱包</span>
				</div>
				<div class="redMoney">
					<span class="moneyNum">0
					<span>个</span>
					</span>
					<span class="wallet">红包</span>
				</div>
				<div class="goldMoney">
					<span class="moneyNum">0
					<span>个</span>
					</span>
					<span class="wallet">金币</span>
				</div>
			</div>
			<section class="infoFive">
				<router-link to="/older" tag="div" class="profile-address">
					<div class="profileLeft one">
						<i class="el-icon-location-outline"></i>
						<span>我的订单</span>

					</div>
					<i class="el-icon-arrow-right"></i>
				</router-link>
				<div class="profile-goldMoney" ref="addres" @click="getaddres">
					<div class="profileLeft two">
						<i class="el-icon-goods"></i>
						<span>我的地址</span>
					</div>
					<i class="el-icon-arrow-right"></i>
				</div>
				<router-link to="/gold" tag="div" class="profile-share">
					<div class="profileLeft three">
						<i class="iconfont icon-youhuiquan"></i>
						<span>分享拿十元现金</span>
					</div>
					<i class="el-icon-arrow-right"></i>
				</router-link>
				<router-link to="/service" tag="div" class="profile-service">
					<div class="profileLeft four">
						<i class="el-icon-service"></i>
						<span>我的客服</span>
					</div>
					<i class="el-icon-arrow-right"></i>
				</router-link>
				<router-link to="/download" tag="div" class="profile-down">
					<div class="profileLeft five">
						<i class="el-icon-sold-out"></i>
						<span>下载饿了么APP</span>
					</div>
					<i class="el-icon-arrow-right"></i>
				</router-link>
			</section>
		</section>
		<footer>
			<Tab></Tab>
		</footer>
	</div>
</template>
<script type="text/javascript">
	import Tab from '../base/Tab.vue'
	import backHeader from '../base/backHeader.vue'
	import store from '../../store/index.js'
	//	import axios from 'axios';
	//	//增加默认的请求路径
	//	axios.defaults.baseURL = 'http://localhost:3030'
	//	axios.interceptors.response.use((res) => {
	//		return res.data
	//	})
	export default {
		data() {
			return {
				userInfo: [],
				title: '我的',
				username: '登陆/注册',
				password: '使用手机登陆优惠更多'
			}
		},
		created() {

		},
		methods: {
			getIdData() {
				if(sessionStorage.getItem("user_name") && sessionStorage.getItem("tel_phone")) {
					this.username = sessionStorage.getItem("user_name");
					this.password = sessionStorage.getItem("tel_phone");
					this.$store.commit('changeLogin', '100')
				}
			},
			getaddres() {
				let sess = sessionStorage.getItem("user_name")
				if(sess) {
					this.$router.push('/chooseadd')
				} else {
					this.open4()
				}
			},
			open4() {
				this.$notify({
					title: '',
					message: '请先完成登陆哦~',
					type: 'warning'
				});
			},
			isLogin(){
				let sess = sessionStorage.getItem("user_name")
				if(sess) {
					this.$router.push('/personinfo')
				} else {
					this.$router.push('/login')
				}				
			}
		},
		computed: {

		},
		mounted() {
			this.getIdData()
		},
		components: {
			Tab,
			backHeader,
			store
		}
	}
</script>
<style scoped lang="less">
	html,
	body {
		width: 100%;
		height: 100%;
	}
	
	body {}
	
	* {
		margin: 0;
		padding: 0;
	}
	
	.content {
		position: absolute;
		left: 0;
		top: 0;
		height: 100%;
		width: 100%;
		background-color: #F5F5F5;
		.profile {
			position: absolute;
			left: 0;
			top: 11.733333vw;
			width: 100%;
			padding: 6.666667vw 4vw;
			color: #fff;
			background-image: linear-gradient(90deg, #0af, #0085ff);
			display: flex;
			align-items: center;
			height: 30vw;
			box-sizing: border-box;
			justify-content: space-between;
			display: flex;
			.headerPic {
				width: 18vw;
				height: 18vw;
				img {
					border-radius: 50%;
					width: 100%;
				}
			}
			.loginReg {
				padding-right: 15vw;
				width: 50vw;
				h3 {
					font-size: 6.2vw;
				}
				.youhui {
					font-size: 3vw;
				}
			}
		}
		.mainInfo {
			border-bottom: 1px solid #ddd;
			position: relative;
			width: 100%;
			top: 30vw;
			height: 22.4vw;
			display: flex;
			justify-content: space-between;
			background-color: #fff;
		}
		.mainInfo>div {
			text-align: center;
			width: 33.3vw;
			height: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}
		.money,
		.redMoney,
		.goldMoney {
			border-right: 1px solid #ddd;
			.moneyNum {
				font-weight: 700;
				font-size: 6.5vw;
				span:nth-child(1) {
					font-weight: none;
					font-size: 3.5vw;
				}
			}
		}
		.money .moneyNum {
			color: rgb(0, 152, 251);
		}
		.redMoney .moneyNum {
			color: rgb(255, 95, 62);
		}
		.goldMoney .moneyNum {
			color: rgb(106, 194, 11);
		}
		.goldMoney {
			border-right: none;
		}
		.infoFive {
			width: 100%;
			position: absolute;
			left: 0;
			top: 62vw;
		}
		.infoFive>div {
			height: 10vw;
			box-sizing: border-box;
			padding: 0 2.5vw;
			margin: 5vw 0;
			width: 100%;
			display: flex;
			align-items: center;
			background-color: #EDF2FC;
			justify-content: space-between;
			background-color: #FFFFFF;
			div:nth-child(1) {
				display: flex;
				align-items: center;
				width: 40vw;
				span:nth-child(2) {
					margin-left: 2vw;
				}
			}
			div:nth-child(3) {
				margin: 0;
			}
			span {
				font-size: 4.2vw;
			}
			i:nth-child(1) {
				font-size: 6.2vw;
			}
			i:nth-child(2) {
				color: #999;
				font-size: 3.2vw;
			}
			.one {
				i:nth-child(1) {
					color: rgb(74, 165, 240);
				}
			}
			.two {
				i:nth-child(1) {
					color: rgb(148, 217, 74);
				}
			}
			.three {
				i:nth-child(1) {
					color: rgb(252, 123, 83);
				}
			}
			.four {
				i:nth-child(1) {
					color: rgb(74, 165, 240);
				}
			}
			.five {
				i:nth-child(1) {
					color: rgb(74, 165, 240);
				}
			}
		}
	}
</style>