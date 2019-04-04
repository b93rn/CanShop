var mongoose = require('mongoose')
var helper = require('./helperFunctions')

var userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
    required: true
    },
    credit: {
        type: Number,
        required: true,
        set: helper.setCredit,
        get: helper.getCredit,
    },
    canCount: {
        type: Number,
        required: true
    },
    deleted: {
        type: Boolean,
        default: false
    }
}).set('toObject', { getters: true }).set('toJSON', { getters: true })

var User = module.exports = mongoose.model('User', userSchema)

module.exports.get = function (callback, limit) {
    User.find(callback).limit(limit);
}