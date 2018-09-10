let Swiper=require('../Schema/goods.js')
let detail=async (ctx)=>{
    let code=await ctx.request.body
    let result={
        'errcode':0,
        'message':'',
        'result':{}
    }
    if (result.errcode==0){
        let resultFind=await Swiper.findOne(code)
        if (resultFind) {
            result.errcode=1
            result.result=resultFind
            result.message='取得数据'          
        }else {
            result.errcode=2
            result.message='没有取得数据'
        }
    }
    ctx.body=result
}
module.exports=detail
