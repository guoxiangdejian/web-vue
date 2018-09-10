<template>
	<div class="formWrap">
		<div class="logo">
			<img src="../../../static/img/Logo.png"/>
		</div>
		<el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
			<el-form-item label="账户" prop="acco">
				<el-input type="text" v-model="ruleForm2.acco" auto-complete="off"></el-input>
			</el-form-item>
			<el-form-item label="密码" prop="pass">
				<el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
			</el-form-item>
			<el-form-item label="手机号码" prop="phone">
				<el-input v-model.number="ruleForm2.phone"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="sendUserInfo">登陆</el-button>
				<el-button @click="resetForm('ruleForm2')">重置</el-button>
			</el-form-item>
		</el-form>
		<div class="remindMsg">
			<span>温馨提示：未注册过的账号，登录时将自动注册。</span>
			<span>注册过的用户可凭账号密码登录。</span>
		</div>
	</div>
</template>
<script type="text/javascript">
	import { login } from '../../api/index.js'
	export default {
		data() {
			var account = (rule, value, callback) => {
				if(value === '') {
					callback(new Error('请输入用户名'));
				} else {
					callback();
				}
			};
			var checkAge = (rule, value, callback) => {

				if(!value) {
					return callback(new Error('手机不能为空'));
				}
				let telreg = /^(13[0-9]|15[0-9]|17[0-9]|18[0-9]|14[0-9])[0-9]{8}$/;
				if(!Number.isInteger(value)) {
					callback(new Error('请输入数字值'));
				} else {
					if(!telreg.test(value)) {
						callback(new Error('输入正确的手机号'));
						this.isOff = false
					} else {
						callback();
						this.isOff = true
					}
				}

			};
			var validatePass = (rule, value, callback) => {
				if(value === '') {
					callback(new Error('请输入密码'));
					return;
				}
				callback();
			};

			return {
				ruleForm2: {
					acco: '',
					pass: '',
					phone: ''
				},
				rules2: {
					acco: [{
						validator: account,
						trigger: 'blur'
					}],
					pass: [{
						validator: validatePass,
						trigger: 'blur'
					}],
					phone: [{
						validator: checkAge,
						trigger: 'blur'
					}]
				},
				isOff : false
			};
		},
		methods: {
			resetForm(formName) {
				this.$refs[formName].resetFields();
			},
			sendUserInfo() {
				let info = {
					"username": this.ruleForm2.acco,
					"password": this.ruleForm2.pass,
					"telphone": this.ruleForm2.phone
				}
				login(info).then((res) => {
					if(res.code == 2&&this.isOff ||res.code == 3&&this.isOff) {
						this.open2()
					} else if(res.code == 4) {
						this.open4()
					}else if(res.code == 1){
						this.open1()
					}
				})
			},
			open2() {
				this.$message({
					message: '登陆成功',
					type: 'success',	
					duration:1000
				});
				sessionStorage.setItem("user_name",this.ruleForm2.acco);
				sessionStorage.setItem("tel_phone",this.ruleForm2.phone);
				this.$router.back(-1)
			},
			open4() {
				this.$message.error('账号密码错误');
			},
			open1() {
				this.$message.error('账号密码不能不为空');
			}
		}
	}
</script>
<style scoped lang="less">
	.formWrap {
		position: relative;
		width: 100%;
		top: 10vw;
	}
	.logo{
		position: relative;
		width: 30vw;
		margin: 0 auto;	
		img{
			width: 100%;
		}
	}
	.remindMsg{
		display: flex;
		flex-direction: column;
		width: 100%;
		padding-left: 8vw;
		box-sizing: border-box;
		
		span{
			color: red;
			margin: 3vw 0;
		}
	}
</style>