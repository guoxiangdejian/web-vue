<template>
	<div class="content">
		<!--<div>
			<router-view :key="key"></router-view>
		</div>-->
		<header>
			<backHeader>{{title}}</backHeader>
		</header>
		<main>
			<router-link :to="{name:'Chooseadd'}" tag="div" class="address">
				<i class="el-icon-location-outline"></i>
				<div class="userInfo">
					<div class="nameP">
						<h3>{{allAddData.contactname}}</h3>
						<span>{{allAddData.contactphone}}</span>
					</div>
					<div class="detaiAdd">
						<span>{{allAddData.contactress}}</span>
					</div>
				</div>
				<i class="el-icon-arrow-right"></i>
			</router-link>
			<div class="goTime">
				<h3>送达时间</h3>
				<div class="time">
					<span>预计时间：19：30</span>
					<span>蜂鸟专送</span>
				</div>
			</div>
			<div class="payMoney">
				<div class="pay">
					<span>支付方式</span>
					<span>在线支付<i class="el-icon-arrow-right"></i></span>
				</div>
				<div class="redpacket">
					<span>红包</span>
					<span>暂时只在饿了么APP中支持<i class="el-icon-arrow-right"></i></span>
				</div>
			</div>
			<div class="shopList">
				<div class="shoptitle">
					<span>购买商品</span>
				</div>
				<div class="allListShop">
					<ul class="list">
						<li v-for="(shopListData,index) in shopListDatas">
							<span>{{shopListData.shopName}}</span>
							<div class="numPri">
								<span>x{{shopListData.shopNumber}}</span>
								<span>￥{{shopListData.shopMoney}}</span>
							</div>
						</li>
					</ul>
					<div class="shopMoney">
						<span></span>
					</div>
				</div>
			</div>
		</main>
		<footer>
			<div class="sellteCar">
				<span>{{allMoneyShop | MoneyTwo(allMoneyShop)}}</span>
				<span @click="lastsettle">确认下单</span>
			</div>
		</footer>

	</div>
</template>
<script type="text/javascript">
	import backHeader from '../base/backHeader.vue'
	import { getAddress, getOrders } from '../../api/index.js'
	export default {
		data() {
			return {
				title: '确认订单',
				shopListDatas: [],
				allMoneyShop: 0,
				allAddData: 0,
				allAddDatas: []
			}
		},
		created() {
			this.getShopData()
			this.getData()
		},
		filters: {
			MoneyTwo(value) {
				return "待支付：￥" + value.toFixed(2) + "元"
			}
		},
		methods: {
			getShopData() {
				this.shopListDatas = JSON.parse(sessionStorage.getItem("myCar"))
			},
			getAllMoney() {
				for(let i = 0; i < this.shopListDatas.length; i++) {
					this.allMoneyShop += this.shopListDatas[i].shopMoney * this.shopListDatas[i].shopNumber
				}
			},
			getData() {
				let username = {
					"username": sessionStorage.getItem("user_name")
				}
				//				let isTrue = sessionStorage.getItem("user_name")

				getAddress(username).then((response) => {
					if(response.result[0][this.$store.state.addIndex] == undefined) {
						this.allAddData == undefined
						return
					} else {
						this.allAddData = response.result[0][this.$store.state.addIndex]
					}
				}).catch((err) => {
					console.log(err)
				})

			},
			lastsettle() {

				if(this.allAddData == 0) {
					alert('请选择地址')
				} else {
					this.$notify.success({
						title: '成功',
						message: '已加入订单列表',
						showClose: false,
						duration: 1500
					});
					let data = {
						username: sessionStorage.getItem("user_name"),
						allprice: this.allMoneyShop,
						alllist: this.shopListDatas.length,
						shopimg: this.shopListDatas[0].shopImg
					}
					getOrders(data).then((response)=>{
						
					}).catch((err)=>{
						console.log(err)
					})
					this.$router.push('/settlepage')
				}
			}
		},
		computed: {

		},
		mounted() {
			this.getAllMoney()

		},
		beforeUpdate() {

		},
		components: {
			backHeader
		}
	}
</script>
<style scoped lang="less">
	* {
		margin: 0;
		padding: 0;
		list-style: none;
	}
	
	.content {
		width: 100%;
		height: 100%;
		position: absolute;
		background-color: #F5F5F5;
		left: 0;
		top: 0;
	}
	
	main {
		margin-bottom: 15vw;
		width: 100%;
		position: absolute;
		left: 0;
		top: 12vw;
		.address {
			box-sizing: border-box;
			padding: 0 3.5vw;
			position: relative;
			width: 100%;
			height: 20vw;
			background-color: #fff;
			display: flex;
			align-items: center;
			justify-content: space-between;
			.userInfo {
				width: 100%;
				height: auto;
				display: flex;
				box-sizing: border-box;
				padding: 5vw 5vw;
				flex-direction: column;
				.nameP {
					width: 100%;
					display: flex;
					justify-content: flex-start;
					align-items: center;
					h3:nth-child(1) {
						font-size: 5.4vw;
					}
					span:nth-child(2) {
						font-size: 4vw;
						margin-left: 5vw;
					}
				}
			}
			i:nth-child(1) {
				font-size: 5vw;
				color: #00A9FF;
			}
			i:nth-child(3) {
				font-size: 5vw;
			}
		}
		.goTime {
			margin: 3vw 0;
			box-sizing: border-box;
			padding: 0 3.5vw;
			position: relative;
			width: 100%;
			height: 20vw;
			background-color: #fff;
			display: flex;
			align-items: center;
			justify-content: space-between;
			border-left: 1vw solid #3190e8;
			h3 {
				font-size: 5vw;
			}
			.time {
				position: relative;
				text-align: right;
				display: flex;
				flex-direction: column;
				align-items: flex-end;
				justify-content: center;
				span {
					margin: 2vw 0;
				}
				span:nth-child(1) {
					font-size: 4vw;
					color: #3190e8;
				}
				span:nth-child(2) {
					font-size: 3vw;
					color: #fff;
					background-color: #3190e8;
					width: 12vw;
					border-radius: .1vw;
					padding: 1vw;
					text-align: center;
				}
			}
		}
		.payMoney {
			width: 100%;
			.pay,
			.redpacket {
				margin-top: 3vw 0;
				box-sizing: border-box;
				padding: 0 3.5vw;
				position: relative;
				width: 100%;
				height: 13vw;
				background-color: #fff;
				display: flex;
				align-items: center;
				justify-content: space-between;
				font-size: 3.8vw;
				border-bottom: .1vw solid #D3D3D3;
			}
		}
		.shopList {
			margin-top: 3vw;
			box-sizing: border-box;
			padding: 0 3.5vw;
			position: relative;
			width: 100%;
			height: auto;
			background-color: #fff;
			font-size: 3.8vw;
			.shoptitle {
				line-height: 10vw;
				width: 100%;
				height: 10vw;
				border-bottom: .1vw solid #D3D3D3;
			}
			.allListShop {
				width: 100%;
				height: auto;
				.list {
					width: 100%;
					li {
						height: 13vw;
						display: flex;
						justify-content: space-between;
						align-items: center;
						.numPri {
							display: flex;
							width: 25vw;
							justify-content: space-between;
							font-size: 4vw;
							span:nth-child(1) {
								color: #f60;
							}
						}
					}
				}
			}
		}
	}
	
	footer {
		width: 100%;
		position: fixed;
		bottom: 0;
		.sellteCar {
			box-sizing: border-box;
			position: relative;
			width: 100%;
			height: 13vw;
			padding-left: 3.5vw;
			display: flex;
			align-items: center;
			justify-content: space-between;
			font-size: 3.8vw;
			background-color: #3c3c3c;
			span:nth-child(1) {
				font-size: 5vw;
				color: #FFFFFF;
			}
			span:nth-child(2) {
				width: 20vw;
				height: 13vw;
				text-align: center;
				line-height: 13vw;
				background-color: #56d176;
				color: #FFFFFF;
			}
		}
	}
</style>