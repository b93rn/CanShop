// Init the router
let router = require('express').Router()

// Test of the api response
router.get('/', (req, res) => {
    res.json({
        status: 'API is working',
        message: 'Welcome to the CanShop, its amazing very CHEAP DRINKS'
    })
})

// USERS
var userController = require('../controllers/userController')

router.route('/users')
    .get(userController.index)
    .post(userController.new)

router.route('/user/:user_id')
    .get(userController.view)
    .patch(userController.update)
    .put(userController.update)
    .delete(userController.delete)

//  PRODUCTS
var productController = require('../controllers/productController')

router.route('/products')
    .get(productController.index)
    .post(productController.new)

router.route('/product/:product_id')
    .get(productController.view)
    .patch(productController.update)
    .put(productController.update)
    .delete(productController.delete)

// SALES
var salesController = require('../controllers/salesController')

router.route('/sales')
    // .get(salesController.index)
    .post(salesController.new)
    
// router.route('/sales/:amount')
        // .get(salesController.getAmount)

router.route('/sale/:sale_id')
    // .get(salesController.view)
    // .patch(salesController.update)
    // .put(salesController.update)
    // .delete(salesController.delete)


module.exports = router;