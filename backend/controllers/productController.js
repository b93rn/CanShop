Product = require('../models/productModel')

exports.index = function (req, res) {
    Product.find({
        deleted: false
    }).exec(function(err, products) {
        if (err) {
            res.json({
                status: "Error",
                message: err
            })
        } else {
            res.json({
                status: "Success",
                message: "Products succesfully retrieved",
                data: products
            })
        }
    })
 }


// Post.
exports.new = function (req, res) {
    var product = new Product()
    product.name = req.body.name
    product.description = req.body.description
    product.barcode = req.body.barcode
    product.price = req.body.price
    product.purchasePrice = req.body.purchasePrice
    product.amount = req.body.amount !== undefined ? req.body.amount : 0
    product.color = req.body.color !== undefined ? req.body.color : '#FFFFFF'

    product.save(function (err) {
        if (err) {
            res.json(err)
        } else {
            res.json({
                status: "Success",
                message: "New Prodct created",
                data: product
            })
        }
    })
}
// name, description  nn, ,barcode nn, price, purchasePrice, amount nn

// GET.
exports.view = function (req, res) {
    User.find({
        deleted: false
    }).findById(req.params.product_id, function (err, product) {
        if (err) {
            res.json({
                Status: "Error",
                message: err
            })
        } else {
            res.json({
                message: "Product details loading...",
                data: product
            })
        }
    })
}

// PUT. 
exports.update = function (req, res) {
    Product.findById(req.params.product_id, function (err, product) {
        if (err) {
            res.json({
                status: "Error",
                message: err
            })
        } else {
            product.name = req.body.name !== undefined ? req.body.name : product.name
            product.description = req.body.description !== undefined ? req.body.description : product.description
            product.barcode = req.body.barcode !== undefined ? req.body.barcode : product.barcode 
            product.price = req.body.price !== undefined ? req.body.price : product.price  
            product.purchasePrice = req.body.purchasePrice !== undefined ? req.body.purchasePrice : product.purchasePrice 
            product.amount = req.body.amount !== undefined ? req.body.amount : product.amount
            product.color = req.body.color !== undefined ? req.body.color : product.color

            product.save(function(err) {
                if(err) {
                    res.json({
                        status: "Error",
                        message: err
                    })
                } else {
                    res.json({
                        message: "Product has been updated",
                        data: product
                    })
                }
            })
        }
    })
}

// DELETE
exports.delete = function(req, res) {
    Product.findById(req.params.product_id, function(err, product) {
        if(err) {
            res.json({
                status: "Error",
                message: err
            })
        } else {
            product.deleted = true;
            product.save(function(err) {
                if(err) {
                    res.json({
                        status: "Error",
                        message: err
                    })
                } else {
                    res.json({
                        status: "Success",
                        message: "Product has been deleted.",
                        success: true
                    })
                } 
            })
        }
    })
}