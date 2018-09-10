<template>
	<div class="content">
		<div class="header">
			<backHeader>{{title}}</backHeader>
		</div>
		<div class="main">
			<el-form :model="formLabelAlign">
				<el-form-item label="联系人">
					<el-input v-model="formLabelAlign.contactname" placeholder="你的名字"></el-input>
				</el-form-item>
				<el-form-item label="联系电话">
					<el-input v-model="formLabelAlign.phone" placeholder="你的手机号"></el-input>
				</el-form-item>
				<el-form-item label="送餐地址">
					<el-input v-model="formLabelAlign.address" placeholder="详细地址（如门牌号）"></el-input>
				</el-form-item>
				<el-button type="primary" @click="createdAdd">立即创建</el-button>
			</el-form>
		</div>
	</div>
</template>
<script type="text/javascript">
	import backHeader from '../base/backHeader.vue'
	import { creatAddress } from '../../api/index.js';
	export default {
		data() {
			return {
				title: '添加地址',
				formLabelAlign: {
					contactname: '',
					phone: '',
					address: ''
				}
			}
		},
		methods: {
			createdAdd() {
				let info = {
					"username": sessionStorage.getItem("user_name"),
					"contactname": this.formLabelAlign.contactname,
					"conword": this.formLabelAlign.phone,
					"telphone": this.formLabelAlign.address
				}
				creatAddress(info).then((response) => {
					console.log(response)
					this.$router.push("/chooseadd")
				}).catch((errro) => {
					console.log(errro)
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
	.content {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 100;
		background-color: #F5F5F5;
	}
	
	.main {
		position: relative;
		top: 20vw;
		width: 100%;
		height: auto;
		padding: 0 5vw;
		box-sizing: border-box;
	}
</style>