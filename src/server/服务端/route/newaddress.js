let address = require('../Schema/address.js')
let detail = async(ctx) => {
	let code = await ctx.request.body
	let result = {
		'errcode': 0,
		'message': '',
		'result': []
	}
	if(result.errcode == 0) {	
		let resultFind = await address.find(code)
		
//		let resultFindOne = await address.findOne(code)
		
		if(resultFind) {
			result.errcode = 1
			result.result.push(resultFind)
			result.message = '取得数据'
			console.log(code)
		}else{
			result.errcode = 2
			result.message = '没有取得数据'
		}		
	}
	ctx.body = result
}
module.exports = detail