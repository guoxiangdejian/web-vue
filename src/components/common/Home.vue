<template>
	<div class="container">
		<HEader>{{title}}</HEader>
		<div class="search">
			<div class="content">
				<el-input v-model="input" placeholder="搜索饿了么商家、商品名称" suffix-icon="el-icon-search"></el-input>
			</div>
		</div>
		<Swiper :swipers='swipers'></Swiper>
		<div class="icon-nav">
			<ul class="iconul">
				<router-link to="shopClass" tag="li" v-for="(iconData,index) in iconDatas" :key=index>
					<div class="logo">
						<img :src="iconData.iconsrc" />
					</div>
					<span>{{iconData.iconname}}</span>
				</router-link>
			</ul>
		</div>
		<div class="best-seller">
			<div class="member">
				<div class="member-left">
					<i class="iconfont icon-huangguan"></i>
					<span>超级会员</span>
					<span>每月领9元红包</span>
				</div>
				<div class="member-right">
					<span>立即开通</span>
					<i class="iconfont icon-right-arrow"></i>
				</div>
			</div>
			<div class="seller">
				<div class="sellerOne">
					<h3>品质套餐</h3>
					<span>搭配齐全吃得好</span>
					<p>立即抢购<i class="iconfont icon-right-arrow"></i></p>
					<img src="//fuss10.elemecdn.com/d/d4/16ff085900d62b8d60fa7e9c6b65dpng.png?imageMogr/format/webp/thumbnail/!240x160r/gravity/Center/crop/240x160/" />
				</div>
				<div class="sellerTwo">
					<h3>限量抢购</h3>
					<span>超值美味 9.9元起</span>
					<p>89人正在抢<i class="iconfont icon-right-arrow"></i></p>
					<img src="http://fuss10.elemecdn.com/b/e1/0fa0ed514c093a7138b0b9a50d61fpng.png?imageMogr/format/webp/thumbnail/!240x160r/gravity/Center/crop/240x160/" />
				</div>
			</div>
		</div>
		<div class="shoplist-title">
			推荐商家
		</div>
		<div class="aside">
			<aside>
				<section class="shop-list">
					<router-link :to="{name:'detail',params:{bid:shopList.code}}" tag="section" class="allShopInfo" v-for="(shopList,index) in shopLists" :key=index>
						<div class="shop-info">
							<div class="shop-logo">
								<img :src="shopList.shopImg" />
							</div>
							<div class="shop-maininfo">
								<section class="shop-title">
									<h3>{{shopList.shopName}}</h3>
								</section>
								<section class="shop-strong">
									<el-rate v-model="shopList.shopScore" disabled show-score text-color="#ff9900" score-template="{value}">
									</el-rate>
									<span>月售：{{shopList.shopSale}}单</span>
								</section>
								<section class="shop-go">
									<div class="shop-go-left">
										<span>起送：{{shopList.shopMcon}}</span>
										<span>配送费：￥{{shopList.shopDis}}</span>
									</div>
									<div class="shop-go-right">
										<span>{{shopList.shopDistance}}km</span>
										<span>{{shopList.shopTime}}分钟</span>
									</div>
								</section>
								<section class="classify">
									<div>
										<span>{{shopList.shopClass}}</span>
									</div>
									<div class="quickly">
										蜂鸟专送
									</div>
								</section>
							</div>
						</div>
						<div class="shop-active">

							<section class="activity">
								<div class="activity-left">
									<div>
										<span></span>
									</div>
								</div>
								<div class="activity-right">
								</div>
							</section>
						</div>
					</router-link>
				</section>
			</aside>
		</div>
		<Tab></Tab>
	</div>
</template>
<script type="text/javascript">
	import Tab from '../base/Tab.vue'
	import HEader from '../base/Header.vue';
	import { register, getIcon, getShopList } from '../../api/index.js';
	import Swiper from '../base/Swiper.vue'
	export default {
		data() {
			return {
				title: '郑州',
				input: '',
				swipers: [],
				iconDatas: [],
				shopLists: [],
				activeName2: 'first'
			}
		},
		created() {
			this.getSwiper()
			this.getIconData()
			this.getShopListData()
		},
		methods: {
			async getSwiper() {
				this.swipers = await register()
			},
			async getIconData() {
				this.iconDatas = await getIcon()
			},
			async getShopListData() {
				this.shopLists = await getShopList()
			}
		},
		computed: {

		},
		components: {
			HEader,
			Swiper,
			Tab
		}
	}
</script>
<style scoped lang="less">
	html,
	body {
		width: 100%;
		height: 100%;
	}
	
	* {
		margin: 0;
		padding: 0;
	}
	
	.container {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: auto;
		box-sizing: border-box;
		.search {
			position: sticky;
			left: 0;
			top: 0px;
			width: 100%;
			text-align: center;
			background: linear-gradient(left, #00AAFF, #0085FF);
			box-sizing: border-box;
			z-index: 999;
		}
		.content {
			width: 88%;
			padding: 5vw 20px;
			color: #fff;
		}
		.icon-nav {
			position: relative;
			top: 0;
			width: 100%;
			display: flex;
			.iconul {
				margin: 0;
				padding: 0;
				width: 100%;
				text-decoration: none;
				list-style: none;
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;
				li {
					display: flex;
					flex-direction: column;
					width: 25%;
					align-items: center;
					margin: 10px 0;
					.logo {
						width: 12vw;
						height: 12vw;
						img {
							width: 100%;
							height: 100%;
						}
					}
					span {
						font-size: 4vw;
						margin-top: 5px;
					}
				}
			}
			img {
				width: 40px;
				height: 40px;
			}
		}
		.best-seller {
			box-sizing: border-box;
			padding: 0 3vw;
			position: relative;
			top: 0;
			width: 100%;
			height: auto;
			.member {
				margin-bottom: 1vw;
				width: 100%;
				height: 12vw;
				background-color: #fff1cd;
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: space-between;
				font-size: 5vw;
				.member-left {
					span:nth-child(2) {
						color: red;
					}
					span:nth-child(3) {
						font-size: 3.7vw;
					}
					i {
						font-size: 20px;
						color: #d9b395;
					}
				}
				.member-right {
					span:nth-child(1) {
						font-size: 3.7vw;
					}
				}
			}
			.seller {
				width: 100%;
				display: flex;
				height: auto;
				.sellerOne,
				.sellerTwo {
					background: linear-gradient(0deg, #f4f4f4 5%, #fafafa 95%);
					position: relative;
					width: 50%;
					padding: 1vw 0 0 1.5vw;
					display: flex;
					flex-direction: column;
					height: auto;
					font-size: 4.5vw;
					p:nth-child(3) {
						color: #705b28;
					}
					img {
						width: 32vw;
						height: 21vw;
						margin-left: 10vw;
					}
				}
				.sellerTwo {
					border-left: 2px solid #fff;
					h3:nth-child(1) {
						color: red;
					}
					p:nth-child(3) {
						color: red;
					}
				}
			}
		}
		.shoplist-title {
			position: relative;
			top: 0;
			margin-bottom: 0px;
			height: 9.6vw;
			font-size: 3.5vw;
			color: #000;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		.shoplist-title:after,
		.shoplist-title:before {
			display: block;
			content: "";
			width: 5.333333vw;
			height: .266667vw;
			background-color: #999;
		}
		.shoplist-title:after {
			margin-left: 3.466667vw;
		}
		.shoplist-title:before {
			margin-right: 3.466667vw;
		}
		.aside {
			position: relative;
			top: 0;
			margin-bottom: 12vw;
		}
		.allShopInfo {
			width: 100%;
			display: flex;
			border-bottom: 1px solid #d3d3d3;
			padding: 3vw 0; 
			.shop-info {
				width: 100%;
				display: flex;
				padding: 2vw;
				.shop-logo {
					width: 17.333333vw;
					height: 17.333333vw;
					img {
						width: 100%;
						height: 100%;
					}
				}
				.shop-maininfo {
					width: 80%;
					margin-left: 5vw;
					.shop-title {
						h3 {
							font-size: 4.5vw;
						}
					}
					.shop-strong {
						display: flex;
						justify-content: space-between;
						margin: 2vw 0;
						span {
							margin-top: .5vw;
							margin-left: 3.5vw;
							color: #868686;
							font-size: 3vw;
						}
					}
					.shop-go {
						width: 100%;
						color: #868686;
						font-size: 3vw;
						display: flex;
						justify-content: space-between;
						margin-bottom: 2vw;
					}
					.classify {
						display: flex;
						justify-content: space-between;
						align-items: center;
						.quickly {
							color: #fff;
							background-color: #0097ff;
							font-size: 1vw;
							padding: 1vw .5vw;
						}
						span {
							border: 1px solid #D3D3D3;
							color: #949494;
							font-size: 3vw;
							padding: 0 1.066667vw;
						}
					}
				}
			}
		}
	}
</style>