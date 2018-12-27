var mongoose = require('mongoose')
var helper = require('./helperFunctions')

var productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    barcode: {
        type: String,
        required: false
    },
    price: {
        type: Number,
        required: true,
        get: helper.getCredit,
        set: helper.setCredit
    },
    purchasePrice: {
        type: Number,
        required: true,
        get: helper.getCredit,
        set: helper.setCredit
    },
    amount: {
        type: Number,
        required: false
    },
    color: {
        type: String,
        required: false
    }
})

var Product = module.exports = mongoose.model('Product', productSchema)

module.exports.get = function (callback, limit) {
    Product.find(callback).limit(limit)
}