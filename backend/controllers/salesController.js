Sale = require('../models/salesModel')

exports.index = function (req, res) {
    Sale.get(function (err, sales) {
        if (err) {
            res.json({
                status: "Error",
                message: err
            })
        } else {
            res.json({
                status: "Succes",
                message: "Sales succesfully retrieved",
                data: sales
            })
        }
    })
}

// POST.
exports.new = function(req, res) {
    var sale = new Sale()
    sale.buyer = req.body.user.user_id,
    sale.product = req.body.product.product_id

    sale.save(function(err) {
        if(err) {
            res.json({
                status: "Error",
                message: "Failed to add new sale",
                errorMessage: err
            })
        } else {
            res.json({
                status: "Success",
                message: "New sale created",
                data: sale
            })
        }
    })
}
