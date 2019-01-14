Sale = require('../models/salesModel')

exports.index = function (req, res) {
    Sale.find().populate('buyer').populate('product').exec(function(err, sales) {
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
    sale.buyer = req.body.user_id,
    sale.product = req.body.product_id

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

// GET.
exports.view = function(req, res) {
    Sale.findById(req.params.sale_id, function(err, sale) {
        if (err) {
            res.json({
                Status: "Error",
                message: err
            })
        } else {
            res.json({
                message: "Sale record is being loaded...",
                data: sale
            })
        }
    })
}

exports.getAmount = function(req, res) {
    Sale.find().sort({ SaleId: -1}).limit(Number(req.params.amount)).populate('buyer').populate('product').exec(function (err, sales) {
        if(err) {
            res.json({
                status: "Failed to get the sales data",
                message: err,
                success: false
            })
        } else {
            res.json({
                status: "Sales records are beign loaded",
                success: true,
                data: sales
            })
        }
    })
}

// PUT.
exports.update = function(req, res) {
    Sale.findById(sale.params.sale_id, function(err, sale) {
        if(err) {
            res.json({
                status: "Error, can not find this sale record.",
                message, err
            })
        } else {
            sale.buyer = req.body.buyer !== undefined ? req.body.buyer : sale.buyer
            sale.product = req.body.product !== undefined ? req.body.product : sale.product
            
            sale.save(function(err) {
                if(err) {
                    res.json({
                        status: "Error",
                        message: err
                    })
                } else {
                    res.json({
                        message: "Sale has been updated",
                        data: sale
                    })
                }
            })
        }
    })
}

// DELETE.
exports.delete = function(req, res) {
    Sale.deleteOne({
        _id: ReadableStream.params.sale_id
    }, function(err, sale) {
        if(err) {
            res.json({
                status: "Error",
                message: err
            })
        } else {
            res.json({
                status: "Success",
                message: "The sale has been deleted"
            })
        }
    })
}
