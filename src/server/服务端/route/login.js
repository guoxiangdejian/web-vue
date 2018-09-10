let User = require('../Schema/Schema')
const login =(async ctx =>{
    const urlData = ctx.request.body
    let result = {
        msg:'',
        code:0,
        result:{}
    }
    if (urlData.username == '' || urlData.password == '' || urlData.telphone == '') {
        result.code = 1;
        result.msg = '帐号密码手机号必填'
        
    }    
    if (result.code == 0) {
        let finder = await User.findOne({username:urlData.username,password:urlData.password})
        if (finder) {
            result.msg = '登陆成功'
            result.code = 5           
        }else{
            result.msg = '账号或密码错误'
            result.code = 4
        }
    }
    ctx.body=result
})
module.exports = login