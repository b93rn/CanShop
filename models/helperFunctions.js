// Credit is stored in the db as cents, actually credit == db.credit / 100.
module.exports.getCredit = function(credit) {
    return (credit / 100).toFixed(2)
}

// Credit is stored in the db as cents, store credit as: actual credit * 100.
module.exports.setCredit = function(credit) {
    return (credit * 100).toFixed(2)
}