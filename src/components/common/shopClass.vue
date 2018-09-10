<template>
	<div class="content">
		<backHeader>{{title}}</backHeader>
		<div class="button" id="button">
			<div @click="changecode" class="active" ref="one">综合排序</div>
			<div @click="changescore" ref="two">优先好评</div>
			<div @click="changesale" ref="three">销量最高</div>
			<div @click="changedistance" ref="four">距离最近</div>
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
	</div>
</template>
<script type="text/javascript">
	import backHeader from '../base/backHeader.vue';
	import { getShopList } from '../../api/index.js';
	export default {
		data() {
			return {
				shopLists: [],
				title: '商品分类',
				radio2: 3
			}
		},
		created() {
			this.getShopListData()
		},
		methods: {
			async getShopListData() {
				this.shopLists = await getShopList()
//				console.log(this.shopLists)
			},
			changecode(){
				this.sortByKeytwo(this.shopLists, 'code')
				let sellect = document.getElementById('button').children
				for (let i=0; i<sellect.length; i++) {
					sellect[i].className = ''
				}
				this.$refs.one.classList.add('active')
			},
			changescore() {
				this.sortByKey(this.shopLists, 'shopScore')
				let sellect = document.getElementById('button').children
				for (let i=0; i<sellect.length; i++) {
					sellect[i].className = ''
				}
				this.$refs.two.classList.add('active')
			},
			changesale() {
				this.sortByKey(this.shopLists, 'shopSale')
				let sellect = document.getElementById('button').children
				for (let i=0; i<sellect.length; i++) {
					sellect[i].className = ''
				}
				this.$refs.three.classList.add('active')
			},
			changedistance() {
				this.sortByKeytwo(this.shopLists, 'shopDistance')
				let sellect = document.getElementById('button').children
				for (let i=0; i<sellect.length; i++) {
					sellect[i].className = ''
				}
				this.$refs.four.classList.add('active')
			},
			sortByKey(array, key) {
				return array.sort(function(a, b) {
					var x = a[key]
					var y = b[key]
					return((x > y) ? -1 : ((x < y) ? 1 : 0))
				})
			},
			sortByKeytwo(array, key) {
				return array.sort(function(a, b) {
					var x = a[key]
					var y = b[key]
					return((x < y) ? -1 : ((x > y) ? 1 : 0))
				})
			}
		},
		computed: {

		},
		components: {
			backHeader
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
	width: 100%;
	height: auto;
	left: 0;
	top: 0;
}
	.aside {
		position: relative;
		top: 5vw;
		margin-bottom: 12vw;
	}
	.active{
		color: #00A9FF;
	}
	
	.button {
		width: 100%;
		display: flex;
		height: auto;
		align-items: center;
		justify-content: center;
		position: sticky;
		left: 0;
		top: -1vw;
		background-color: #FFFFFF;
		z-index: 999;
		color: #666;
		div{
			text-align: center;
			width: 25%;
			padding: 3vw 0;
			background-color: #FFFFFF;
			border-right: 1px solid #666;
		}
		border-bottom: 1px solid #666;
	}
	
	.allShopInfo {
		width: 100%;
		display: flex;
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
						font-size: .5vw;
						padding: 0 .4vw;
						height: auto;
						height: 3.5vw;
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
</style>