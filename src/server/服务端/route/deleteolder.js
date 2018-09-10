let User = require('../Schema/order')

const deleteolder =(async ctx =>{
    const urlData = ctx.request.body
    
    console.log(urlData.usertel)
    let result = {
        msg:'',
        code:0,
        result:{}
    }    
    if (result.code == 0) {
        let finder = await User.findOne(urlData)
        if (finder) {
            await User.remove(urlData)
            result.msg = '数据已删除'
            result.code = 4           
        }else{
            result.msg = '未找到数据，删除失败'
            result.code = 3
        }
    }
    ctx.body=result
})
module.exports = deleteolder