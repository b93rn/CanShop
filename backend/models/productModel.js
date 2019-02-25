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
        set: helper.setCredit,
        get: helper.getCredit,
    },
    purchasePrice: {
        type: Number,
        required: true,
        set: helper.setCredit,
        get: helper.getCredit,
    },
    amount: {
        type: Number,
        required: false
    },
    color: {
        type: String,
        required: false
    },
    deleted: {
        type: Boolean,
        default: false
    }
}).set('toObject', { getters: true }).set('toJSON', { getters: true })

var Product = module.exports = mongoose.model('Product', productSchema)

module.exports.get = function (callback, limit) {
    Product.find(callback).limit(limit)
}