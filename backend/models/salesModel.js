var mongoose = require('mongoose')
var helper = require('./helperFunctions')
// let autoIncrement = require('mongoose-auto-increment');

// autoIncrement.initialize(mongoose.connection)

var salesSchema = mongoose.Schema({
    SaleId: {
        type: Number
    },
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
}, {
    timestamps: true
}).set('toObject', { getters: true }).set('toJSON', { getters: true })
salesSchema.index({SaleId: 1})

var Sale = module.exports = mongoose.model('Sale', salesSchema)

module.exports.get = function (callback, limit) {
    Sale.find(callback).limit(limit)
}