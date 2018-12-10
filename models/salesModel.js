var mongoose = require('mongoose')
var helper = require('./helperFunctions')

var salesSchema = mongoose.Schema({
    buyer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    }
})

var Sale = module.exports = mongoose.model('Sale', salesSchema)

module.exports.get = function (callback, limit) {
    Sale.find(callback).limit(limit)
}