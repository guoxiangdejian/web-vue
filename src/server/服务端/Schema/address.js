let mongoose = require('../mongoose/mongoose')
Schema = mongoose.Schema
let address = new Schema({
    username:{type:String},
    contactname:{type:String},
    contactphone:{type:Number},
    contactress:{type:String},
})
module.exports = mongoose.model('Address',address)