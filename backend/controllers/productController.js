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
exports.update = async (req, res) => {
    productObject = {}
    // Get potential product data from request.
    req.body.name !== undefined && (productObject.name = req.body.name);
    req.body.description !== undefined && (productObject.description = req.body.description);
    req.body.barcode !== undefined && (productObject.barcode = req.body.barcode);
    req.body.price !== undefined && (productObject.price = req.body.price);
    req.body.purchasePrice !== undefined && (productObject.purchasePrice = req.body.purchasePrice);
    req.body.amount !== undefined && (productObject.amount = req.body.amount);
    req.body.color !== undefined && (productObject.color = req.body.color);

    try {
        const product = await Product.updateProduct(req.params.product_id, productObject);
        res.json({
            message: "Product has been updated",
            data: product
        })
    } catch(err) {
        res.json({
            status: "Error",
            message: err
        })    
    }
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