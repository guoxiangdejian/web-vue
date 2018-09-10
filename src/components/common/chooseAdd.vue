<template>
	<div class="content">
		
		<div class="header">
			<backHeader>{{title}}</backHeader>
		</div>
		<div class="addressList">
			<ul id="addresschildren">
				<li v-for="(address,index) in allAddress" @click="changeAdd(index)">
					<div class="nameP">
						<h3>{{address.contactname}}</h3>
						<span>{{address.contactphone}}</span>
						<div class="sellect">

						</div>
					</div>
					<div class="detaiAdd">
						<span>{{address.contactress}}</span>
					</div>
				</li>
			</ul>
		</div>
		<router-link :to="{name:'Adddddress'}" tag="div" class="footer">
			<i class="el-icon-circle-plus-outline"></i>
			<span>新增收货地址</span>
		</router-link>

		<div>
			<router-view></router-view>
		</div>
	</div>
</template>
<script type="text/javascript">
	import backHeader from '../base/backHeader.vue'
	import { getAddress } from '../../api/index.js'
	import store from '../../store/index.js'
	export default {
		data() {
			return {
				title: '选择地址',
				allAddress: [],
				isIndex : 0
			}
		},
		created() {

		},
		methods: {
			getData() {
				//				addresschildren[0].className = 'sellect active'
				let username = {
					"username": sessionStorage.getItem("user_name")
				}
				getAddress(username).then((response) => {
					this.allAddress = response.result[0]
					this.$nextTick(() => { // DOM更新之后获取子元素
						this.qwe()
					})
				}).catch((err) => {
					console.log(err)
				})
			},
			changeAdd(index) {
				let addresschildren = document.getElementsByClassName('sellect')
				this.$store.commit('changeIndex', index)
				for(let i = 0; i < addresschildren.length; i++) {
					addresschildren[i].className = "sellect"					
				}
				let Index = sessionStorage.setItem("isIndex",index)
				let numIndex = Number(sessionStorage.getItem("isIndex"))
				addresschildren[numIndex].classList.add('active')
				this.$router.push('/firm')
			},
			qwe() {
				let addresschildren = document.getElementsByClassName('sellect')
				let numIndex = Number(sessionStorage.getItem("isIndex"))
				addresschildren[numIndex].classList.add('active')
			}
		},
		mounted() {
			this.getData()

		},
		updated() {

		},
		computed: {

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
		position: absolute;
		width: 100%;
		height: 100%;
		z-index: 99;
		left: 0;
		top: 0;
	}
	
	.addressList {
		width: 100%;
		position: relative;
		top: 0vw;
		ul {
			width: 100%;
			li {
				width: 100%;
				height: auto;
				display: flex;
				box-sizing: border-box;
				padding: 5vw 5vw;
				flex-direction: column;
				background-color: #fff;
				border-bottom: 1px solid #D3D3D3;
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
					.sellect {
						width: 5vw;
						height: 5vw;
						border-radius: 5vw;
						background-color: #D3D3D3;
						border: 1px solid #FFFFFF;
						position: absolute;
						right: 5vw;
						margin-top: 5vw;
					}
					.active {
						background-color: lawngreen
					}
				}
			}
			li>div {
				margin-bottom: 3vw;
			}
		}
	}
	
	.footer {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		height: 15vw;
		background-color: #fff;
		display: flex;
		font-size: 5vw;
		justify-content: center;
		align-items: center;
		z-index: 98;
		color: #00A9FF;
	}
</style>