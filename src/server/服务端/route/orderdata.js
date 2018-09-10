let order = require('../Schema/order.js')
let detail = async(ctx) => {
	let code = await ctx.request.body
	let result = {
		'errcode': 0,
		'message': '',
		'result': {}
	}
	if(result.errcode == 0) {
		let success = new order({
			username: code.username,
			allprice: code.allprice,
			alllist: code.alllist,
			shopimg: code.shopimg
		})
		result.errcode = 2
		let msg = await success.save()
		result.message = '添加订单信息'
		result.result = msg
	}
	ctx.body = result
}
module.exports = detail