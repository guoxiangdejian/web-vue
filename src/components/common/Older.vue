<template>
	<div class="content">
		<backHeader>{{title}}</backHeader>
		<div class="isZero" v-if="isShowZero">
			<div class="imgZero">
				<img src="//fuss10.elemecdn.com/8/c8/bbe5984003cb26fc7b445a4a15195png.png" />
			</div>
			<span>暂无订单信息</span>
		</div>
		<div class="main">
			<ul id="list">
				<li v-for="(orderlist,index) in orderlists">
					<div class="top">
						<div class="logo">
							<img :src="orderlist.shopimg" />
						</div>
						<span>等待支付</span>
					</div>
					<div class="mid">
						<span>商品种类：{{orderlist.alllist}}种</span>
						<span>总价：￥{{orderlist.allprice}}</span>
					</div>
					<div class="bottom">
						<el-button type="danger" @click="open2(orderlist, index)">删除订单</el-button>
						<el-button type="primary" @click="open">结账</el-button>
					</div>
				</li>
			</ul>
		</div>
		<Tab></Tab>
	</div>
</template>
<script type="text/javascript">
	import Tab from '../base/Tab.vue'
	import backHeader from '../base/backHeader.vue'
	import { getOrderList, deleteOneList } from '../../api/index.js'
	export default {
		data() {
			return {
				title: '订单列表',
				orderlists: [],
				isShowZero: true
			}
		},
		created() {
			
		},
		methods: {
			getData() {
				let data = {
					username: sessionStorage.getItem("user_name")
				}
				getOrderList(data).then((response) => {
					this.orderlists = response.result[0].reverse()
					if(this.orderlists.length == 0) {
						this.isShowZero = true
					} else {
						this.isShowZero = false
					}
//					console.log(this.orderlists)
				}).catch((err) => {
					console.log(err)
				})
			},
			deleteOne(orderlist, index) {
				let hideList = document.getElementById('list').children
				let data = {
					username: sessionStorage.getItem("user_name"),
					allprice: orderlist.allprice,
					alllist: orderlist.alllist,
					shopimg: orderlist.shopimg
				}
				deleteOneList(data).then((response) => {
					console.log(response)
				}).catch((err) => {
					console.log(err)
				})
				hideList[index].style.display = 'none'
				
			},
			open2(orderlist, index) {
				this.$confirm('是否确定删除该订单?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					this.deleteOne(orderlist, index)
					this.$message({
						type: 'success',
						message: '删除成功!'
					});					
					this.getData()
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消删除'
					});
				});

			},
			open() {
				this.$alert('请下载官方APP结账~', '', {
					confirmButtonText: '确定'
				});
			}
		},
		mounted() {
			this.getData()
		},
		computed: {

		},
		components: {
			Tab,
			backHeader
		}
	}
</script>
<style scoped lang="less">
	* {
		padding: 0;
		margin: 0;
	}
	
	html,
	body {
		box-sizing: border-box;
		width: 100%;
	}
	
	.content {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: auto;
		background-color: #F5F5F5;
		margin-bottom: 13vw;
	}
	
	.isZero {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		font-size: 5vw;
	}
	
	.main {
		position: relative;
		width: 100%;
		top: 0vw;
		ul {
			list-style: none;
			width: 100%;
			margin-bottom: 0vw;
			li {
				width: 100%;
				height: 40vw;
				display: flex;
				flex-direction: column;
				box-sizing: border-box;
				padding: 5vw 5vw;
				background-color: #FFFFFF;
				border-bottom: 1px solid #D3D3D3;
				margin-bottom: 5vw;
				.top {
					width: 100%;
					justify-content: space-between;
					align-items: center;
					display: flex;
					.logo {
						width: 15vw;
						height: 15vw;
						img {
							border-radius: 2vw;
							width: 100%;
							height: 100%;
						}
					}
				}
				.mid {
					margin: 5vw 0;
					width: 100%;
					justify-content: space-between;
					align-items: center;
					display: flex;
					span:nth-child(2) {
						color: red;
					}
				}
				.bottom {
					width: 100%;
					justify-content: flex-end;
					align-items: center;
					display: flex;
					button {
						width: 20vw;
						height: 7vw;
					}
				}
			}
		}
	}
</style>