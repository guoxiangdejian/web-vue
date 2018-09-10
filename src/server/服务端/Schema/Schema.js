
let mongoose = require('../mongoose/mongoose')
Schema = mongoose.Schema
let useSchema = new Schema({
    username:{type:"String"},
    password:{type:"String"},
    telphone:{type:"Number"}
})
module.exports = mongoose.model('User',useSchema)