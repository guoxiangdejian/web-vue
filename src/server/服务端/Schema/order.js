let mongoose = require('../mongoose/mongoose')
Schema = mongoose.Schema
let order = new Schema({
    username:{type:String},
    allprice:{type:Number},
    alllist:{type:Number},
    shopimg:{type:String},
})
module.exports = mongoose.model('Order',order)