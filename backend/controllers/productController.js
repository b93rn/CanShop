const Product = require('../data/product')

exports.index = function (req, res) {
    Product.findAll().then(products => {
        res.json({
            status: "Success",
            message: "Products succesfully retrieved",
            data: products
        })
    }).catch(err => {
        res.json({
            status: "Error",
            message: err
        })
    })
}

// Post.
exports.new = function (req, res) {
    Product.create({
        name: req.body.name,
        description: req.body.description,
        barcode: req.body.barcode,
        price: req.body.price,
        purchasePrice: req.body.purchasePrice,
        amount: req.body.amount !== undefined ? req.body.amount : 0,
        color: req.body.color !== undefined ? req.body.color : '#FFFFFF'
    }).then(product => {
        res.json({
            status: "Success",
            message: "New Prodct created",
            data: product
        });
    }).catch(err => {
        res.json(err);
    });
}

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
   Product.update({
    name: req.body.name !== undefined ? req.body.name : Product.name,
    description: req.body.description !== undefined ? req.body.description : Product.description,
    barcode: req.body.barcode !== undefined ? req.body.barcode : Product.barcode,
    price: req.body.price !== undefined ? req.body.price : product.price,
    purchasePrice: req.body.purchasePrice !== undefined ? req.body.purchasePrice : Product.purchasePrice,
    amount: req.body.amount !== undefined ? req.body.amount : Product.amount,
    color: req.body.color !== undefined ? req.body.color : Product.color
   }, {
       where: {
           id: req.params.product_id
       },
       returning: true
   }).then(product => {
    res.json({
        message: "Product has been updated",
        data: product[1][0].dataValues
    })
   }).catch(err => {
    res.json({
        status: "Error",
        message: err
    })
   })
}

// DELETE
exports.delete = function (req, res) {
    Product.destroy({
        where: {
            id: req.params.product_id
        }
    }).then(product => {
        res.json({
            status: "Success",
            message: "Product has been deleted.",
            success: true
        });
    }).catch(err => {
        res.json({
            status: "Error",
            message: err
        });
    }); 
}