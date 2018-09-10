let mongoose = require('mongoose')
let db_url = 'mongodb://localhost:27017/elements'
mongoose.connect(db_url)
mongoose.connection.on('connected',function(){
    console.log('mongoose连接成功')
})
mongoose.connection.on('error',function(err){
    if (err) {
        console.log('出现错误')
    }  
})
mongoose.connection.on('disconnected',function(){
    console.log('mongodb释放连接成功')
})
module.exports = mongoose