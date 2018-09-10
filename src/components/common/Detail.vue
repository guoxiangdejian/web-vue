<template>
	<div class="content">
		<div class="main-ton" ref="mainton">
			<header ref="header">
				<div class="bgc">
					<i class="iconfont icon-fanhui" @click="goBack"></i>
				</div>
				<div class="head-img">
					<img :src="good.shopImg" />
				</div>
			</header>
			<div class="syno" ref="syno">
				<div class="syno-name">
					<h3>{{good.shopName}}</h3>
				</div>
				<div class="syno-strong">
					<span>评价：{{good.shopScore}}</span>
					<span>月售：{{good.shopSale}}单</span>
					<span>配送约{{good.shopMcon}}分钟</span>
				</div>
				<div class="syno-activity">
					<span>满减</span>
					<span>满20减6，满70减24</span>
					<span>17个优惠<i class="iconfont icon-xiabiao"></i></span>
				</div>
			</div>
		</div>
		<div class="good-nav">
			<div class="good-nav-wrap" id="goodnavwrap">
				<main id="goodsMain" ref="goodsmain">
					<aside class="aside-goods">
						<ul ref="menuIcon">
							<li v-for="(goodsAllType,index) in goodsAllTypes" class="menulist">
								{{goodsAllType.listone}}
								<el-badge v-show="goodsAllType.listNumber>0" :value="goodsAllType.listNumber" class="item"></el-badge>
							</li>
						</ul>
					</aside>
					<div class="alllist">
						<div class="scrollerAllList" v-for="(goodList,index) in goodLists">
							<div class="scroller">
								<div class="scroller-title">
									<h4>{{goodList[0].sohpType}}</h4>
									<span>{{goodList[0].sohpTypeInfo}}</span>
								</div>
								<div class="scroller-list">
									<ul ref="shopallLists">
										<li v-for="(goods,index) in goodList">
											<div class="goodimg">
												<img :src="goods.shopImg" />
											</div>
											<div class="fooddetails-info">
												<h4>{{goods.shopName}}</h4>
												<div class="fooddetails-info-strong">
													<span>{{goods.shopSale | getMoon(goods.shopSale)}}</span>
													<span>{{goods.shopScore | getView(goods.shopScore)}}</span>
												</div>
												<p class="shopPriNum">
													<strong>{{goods.shopMoney | getMoney(goods.shopMoney)}}</strong>
													<span class="shopNum">
														<i v-show="goods.shopNumber > 0" class="el-icon-remove-outline" @click="delAllShopNum(goods,index)"></i>
														<span v-show="goods.shopNumber > 0">{{goods.shopNumber}}</span>
													<i class="el-icon-circle-plus" @click="addAllShopNum(goods,index)"></i>
													</span>
												</p>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</main>
			</div>
		</div>
		<footer>
			<div class="navShop">
				<el-badge v-show="allShopNums>0" :value="allShopNums" class="allShopNumber"></el-badge>
				<div :class="{'shopCar':true,'shopCarOn':allShopNums>0}">
					<div class="carBgc">
						<i class="iconfont icon-gouwu1"></i>
					</div>
				</div>
				<div class="shopPrice">
					<div class="shopPriceShow">
						<h4 :class="{'h4On':allShopNums>0}">{{allShopPrice | twoMoney(allShopPrice)}}</h4>
						<span>另需配送费3元</span>
					</div>
				</div>
				<div class="shopCondition">
					<h3 v-if="good.priceDif>0" :class="{'h3On':allShopNums>0}">还差{{good.priceDif | twoMoney(good.priceDif)}}元起送</h3>
					<span v-else @click="settle">结算</span>
				</div>
			</div>
		</footer>
		<el-dialog title="提示" :visible.sync="dialogVisible" width="70%">
			<span>检测到未登录，是否现在登陆？</span>
			<span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="routerlogin">确 定</el-button>
  </span>
		</el-dialog>
	</div>
</template>
<script type="text/javascript">
	import { findOneList } from '../../api/index.js';
	export default {
		data() {
			return {
				goods: [],
				good: {},
				goodLists: [],
				activeName: 'first',
				goodsAllTypes: [],
				valueNum: 1,
				allShopNums: 0,
				mycar: [],
				allShopPrice: 0,
				isStartPrice: true,
				difPri: true,
				typeNum: 0,
				dialogVisible: false,
				localShopDatas: []
			}
		},
		created() {
			this.findGoodDtail()
			this.handleScroll()
		},
		filters: {
			getMoney(value) {
				return '￥' + value
			},
			getMoon(value) {
				return '月售' + value + '份'
			},
			getView(value) {
				return '好评率' + value + '%'
			},
			twoMoney(value) {
				return '￥' + value.toFixed(1)
			}
		},
		methods: {
			async findGoodDtail() {
				this.goods = await findOneList(this.bid)
				this.good = this.goods[this.bid - 1]
				this.goodLists = this.goods[this.bid - 1].goodDetail
				this.goodsAllTypes = this.goods[this.bid - 1].goodsAllType
			},
			goBack() {
				this.$router.go(-1)
			},
			handleScroll() {
				let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
				let divTop = document.getElementsByClassName('good-nav')
				let childrenTop = document.getElementsByClassName('scrollerAllList')
				let menulist = document.getElementsByClassName('menulist')
				for(let i = 0; i < menulist.length; i++) {
					menulist[i].onclick = function() {
						document.documentElement.scrollTop = divTop[0].offsetTop + (i * childrenTop[i].offsetHeight -150 )
					}
				}
				for(let i = 0; i < childrenTop.length; i++) {
					if(scrollTop >= divTop[0].offsetTop + (i * childrenTop[i].offsetHeight - 300)) {
						for(let i = 0; i < menulist.length; i++) {
							menulist[i].className = 'menulist'
						}
						menulist[i].className = 'menulist active'
					}
				}
			},
			addAllShopNum(goods, index) {
				this.allShopNums += 1
				goods.shopNumber += 1
				this.allShopPrice += goods.shopMoney
				this.good.priceDif = this.good.priceDif - goods.shopMoney
				for(let i = 0; i < this.goodLists.length; i++) {
					this.goodsAllTypes[i].listNumber = this.goodLists[i].reduce((prev, next) => {
						return prev + next.shopNumber
					}, 0)
				}
				if(this.localShopDatas.length > 0) {
					if(this.localShopDatas.indexOf(goods) == -1) {
						this.localShopDatas.push(goods)
					}
				} else {
					this.localShopDatas.push(goods)
				}		
				sessionStorage.setItem("myCar",JSON.stringify(this.localShopDatas))
//				console.log(sessionStorage.getItem("myCar"))
			},
			delAllShopNum(goods, index) {
				goods.shopNumber -= 1
				this.allShopNums -= 1
				this.good.priceDif = this.good.priceDif + goods.shopMoney
				this.allShopPrice -= goods.shopMoney
				if(this.allShopNums == 0) {
					this.allShopPrice = 0
				}
				for(let i = 0; i < this.goodLists.length; i++) {
					this.goodsAllTypes[i].listNumber = this.goodLists[i].reduce((prev, next) => {
						return prev + next.shopNumber
					}, 0)
				}
				if(this.localShopDatas.length > 0) {
					if(this.localShopDatas.indexOf(goods) >= 0) {
						for(let i = 0; i < this.localShopDatas.length; i++) {
							if(this.localShopDatas[i] == goods) {
								if (this.localShopDatas[i].shopNumber < 1) {
									this.localShopDatas.splice(i,1)
								}					
							}
						}
					}else{
						return;
					}
				}
				sessionStorage.setItem("myCar",JSON.stringify(this.localShopDatas))
//				console.log(sessionStorage.getItem("myCar"))
			},
			settle() {
				let userInfo = sessionStorage.getItem("user_name");
				if(userInfo) {
					this.$router.push({
						path: '/firm'
					})
				} else {
					this.dialogVisible = true
				}
			},
			routerlogin() {
				this.$router.push({
					path: '/login'
				})
			}
		},
		computed: {
			bid() {
				return this.$route.params.bid
			}
		},
		mounted() {
			window.addEventListener('scroll', this.handleScroll)
		},
		updated() {},
		components: {

		},
		destroyed() {
			window.removeEventListener('scroll', this.handleScroll)
		}
	}
</script>
<style scoped lang="less">
	* {
		margin: 0;
		padding: 0;
		list-style: none;
	}
	
	html,
	body {
		width: 100%;
	}
	
	.content {
		width: 100%;
		height: auto;
	}
	
	.main-ton {
		width: 100%;
		height: auto;
	}
	
	header {
		i {
			position: absolute;
			left: 3vw;
			top: 3vw;
			font-size: 5vw;
			color: #fff;
		}
		.bgc {
			width: 100%;
			height: 26.666667vw;
			position: absolute;
			left: 0;
			top: 0;
			background: rgba(196, 188, 204, .5);
		}
		.head-img {
			position: absolute;
			left: 50vw;
			top: 10vw;
			margin-left: -10vw;
			width: 20vw;
			height: 20vw;
			border-top-left-radius: .8vw;
			box-shadow: 0px 1px 2px #868686;
			border-bottom-right-radius: .8vw;
			img {
				width: 100%;
				height:100%;
			}
		}
	}
	
	.syno {
		position: relative;
		top: 26.666667vw;
		width: 100%;
		display: flex;
		align-items: center;
		flex-direction: column;
		.syno>div {
			width: 80%;
		}
		.syno-name {
			h3 {
				margin: 3vw 0 1vw 0;
			}
		}
		.syno-strong {
			width: 72%;
			margin: 2vw 0;
			display: flex;
			justify-content: space-between;
			flex-direction: row;
			span {
				color: #666;
				font-size: 3.66vw;
			}
		}
		.syno-activity {
			width: 72%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			span:nth-child(1) {
				color: #fff;
				font-size: 1vw;
				display: inline-block;
				padding: .833333vw 1.2vw;
				background-color: rgb(240, 115, 115)
			}
			span:nth-child(2) {
				margin-left: -10vw;
				font-size: 3vw;
			}
			span:nth-child(3) {
				i {
					position: relative;
					top: .5vw;
				}
				font-size: 3vw;
				color: #999999;
			}
		}
	}
	
	.good-nav {
		margin-bottom: 12.8vw;
		width: 100%;
		position: relative;
		top: 30.666667vw;
		.good-nav-wrap {
			margin: 0 auto;
			width: 100%;
		}
		main {
			width: 100%;
			display: flex;
			height: auto;
			position: relative;
			.scrollerAllList {
				display: flex;
				flex-direction: column;
			}
			.aside-goods {
				position: relative;
				width: 100%;
				width: 20vw;
				background-color: #f8f8f8;
				left: -8px;
				ul {
					position: sticky;
					position: -webkit-sticky;
					top: 0vw;
					li {
						padding: 4.666667vw 2vw;
						font-size: 3.5vw;
						color: #666;
						text-align: center;
						.item {
							position: absolute;
							left: 13vw;
							margin-top: -4vw;
						}
					}
					.menulist {
						color: #666666;
					}
					.active {
						background-color: #FFFFFF;
						color: black;
					}
				}
			}
			.scroller {
				width: 80vw;
				.scroller-title {
					width: 100%;
					display: flex;
					align-items: center;
					padding-left: 3.5vw;
					justify-content: flex-start;
					box-sizing: border-box;
					h4 {
						font-size: 4vw;
					}
					span {
						margin-left: 2vw;
						margin-top: 1vw;
						font-size: 3vw;
						color: #868686;
					}
				}
				ul {
					width: 100%;
					li {
						box-sizing: border-box;
						display: flex;
						width: 100%;
						margin: 3vw 0;
						padding: 3.5vw;
						justify-content: space-between;
						.goodimg {
							width: 25vw;
							height: 25vw;
							img {
								width: 100%;
								height: 100%;
							}
						}
						.fooddetails-info {
							position: relative;
							left: 0vw;
							h4 {
								width: 40vw;
								font-size: 3.8vw;
							}
							.fooddetails-info-strong {
								margin: 3.5vw 0;
								display: flex;
								font-size: 3vw;
								color: #666666;
								justify-content: space-between;
							}
							.shopPriNum {
								display: flex;
								justify-content: space-between;
								align-items: center;
								margin-top: 7vw;
								color: rgb(255, 83, 57);
								strong {
									font-size: 4.5vw;
								}
								.shopNum {
									position: relative;
									left: 1.5vw;
									display: flex;
									align-items: center;
									justify-content: space-between;
									box-sizing: border-box;
									i {
										font-size: 7vw;
										color: rgb(35, 149, 255);
										padding: 0 1.5vw;
									}
								}
							}
						}
					}
				}
			}
		}
	}
	
	.allShopNumber {
		position: absolute;
		left: 13vw;
		top: -3vw;
		z-index: 999;
	}
	
	.navShop {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		display: flex;
		background: rgba(61, 61, 63, .9);
		height: 12.8vw;
		justify-content: space-between;
		.shopCar {
			position: absolute;
			left: .32rem;
			left: 3.2vw;
			bottom: .2rem;
			bottom: 2vw;
			width: 13.333333vw;
			height: 13.333333vw;
			box-sizing: border-box;
			border-radius: 100%;
			background-image: radial-gradient(circle, #363636 6.266667vw, #444 0);
			border: 1.333333vw solid #444;
			display: flex;
			justify-content: center;
			align-items: center;
			background: #868686;
			i {
				font-size: 6vw;
				color: #fff;
			}
		}
		.shopCarOn {
			background: #3190e8;
		}
		.shopPrice {
			height: 100%;
			padding-left: 18vw;
			.shopPriceShow {
				height: 100%;
				display: flex;
				flex-direction: column;
				justify-content: center;
				h4 {
					font-size: 4vw;
					color: #999;
				}
				.h4On {
					color: #fff;
				}
				span {
					font-size: 3vw;
					color: #999;
					/*color: #fff;*/
				}
			}
		}
		.shopCondition {
			width: 35vw;
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			h3 {
				font-size: 4.2vw;
				color: #999;
				/*color: #fff;*/
			}
			.h3On {
				color: #fff;
			}
			span {
				position: absolute;
				right: 0;
				display: flex;
				align-items: center;
				justify-content: center;
				width: 35vw;
				height: 100%;
				background-color: #38ca73;
				color: #fff;
			}
		}
	}
</style>
<style type="text/css">
	.fixed {
		width: 100%;
		padding: 0;
		position: fixed;
		top: 0px;
		left: 0;
		background: #fff;
		margin: 0 0 15px;
		z-index: 999;
	}
</style>