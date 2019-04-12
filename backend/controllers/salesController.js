const Sale = require('../Data/sale')


// TODO: remove populate
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
// TODO: Get buyer en product from db and make the copy
exports.new = async (req, res) => {
    // console.log(req.body.user_id, req.body.product_id);
    const result = await Sale.AddSale(req.body.user_id, req.body.product_id);

    console.log('test');
    console.log(result);
    return result;
}

// GET.
exports.view = function(req, res) {
    Sale.findById(req.params.sale_id, function(err, sale) {
        if (err) {
            res.json({
                Status: "Could not find the sale",
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

// DELETE + refund user/product
exports.delete = function (req, res) {
    Sale.findById(req.params.sale_id, async function (err, sale) {
        if (!err && sale) {
            try {
                let user = await User.findById(sale.buyer)
                let product = await Product.findById(sale.product)

                // Refund the user
                user.credit = Number(user.credit) + Number(product.price)
                user.canCount--
                
                // Restore Product 
                product.amount++

                // Save the user and the product
                await user.save()
                await product.save()

                // delete the sale
                await sale.delete()        

                // Send to updated user and product to the frontend
                res.json({
                    message: "Sale succesfully deleted.",
                    data: {
                        id: req.params.sale_id,
                        user,
                        product
                    },
                    success: true
                })
                return;
            }
            catch(err) {
                console.error(err)
            }
        }
        res.json({
            status: "Oops, something went wrong.",
            message: err,
            success: false
        })
    })
}
