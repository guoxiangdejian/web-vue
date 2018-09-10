let User = require('../Schema/Schema')
const reg = (async ctx => {
	const urlData = ctx.request.body;
	let result = {
		code: 0,
		msg: '',
		result: {}
	}
	if(urlData.username == '' || urlData.password == '' || urlData.telphone == '') {
		result.code = 1;
		result.msg = '账号密码不能为空'
	}
	if(result.code == 0) {
		let finder = await User.findOne({
			username: urlData.username
		})
		if(finder) {
			let findword = await User.findOne({
				username: urlData.username,
				password: urlData.password
			})
			if(findword) {
				result.code = 2
				result.msg = '登陆成功'
			}else{
				result.code = 4
				result.msg = '账号密码错误'
			}
		} else {
			let success = new User({
				username: urlData.username,
				password: urlData.password,
				telphone: urlData.telphone
			})
			result.code = 3
			let message = await success.save()
			result.msg = '注册成功'
			result.result = message
		}
	}
	ctx.body = result
})
module.exports = reg