let address = require('../Schema/address.js')
let detail = async(ctx) => {
	let code = await ctx.request.body
	let result = {
		'errcode': 0,
		'message': '',
		'result': {}
	}
	if(code.contactname == '' || code.conword == '' || code.telphone == '') {
		result.errcode = 1;
		result.msg = '请完善信息'
	}
	if(result.errcode == 0) {
		let success = new address({
			username: code.username,
			contactname: code.contactname,
			contactphone: code.conword,
			contactress: code.telphone
		})
		result.errcode = 2
		let msg = await success.save()
		result.message = '添加地址成功'
		result.result = msg
	}
	ctx.body = result
}
module.exports = detail