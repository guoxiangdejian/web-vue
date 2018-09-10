let mongoose = require('../mongoose/mongoose')
Schema = mongoose.Schema
let swiper = new Schema({
    code:{type:String},
})
module.exports = mongoose.model('Swiper',swiper)