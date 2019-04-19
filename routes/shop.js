const path = require('path')

const express = require('express')

const shopController = require('../controllers/shop')

const router = express.Router()

// index GET
router.get('/', shopController.getIndex)

// products GET
router.get('/products', shopController.getProducts)

// individual product GET
router.get('/products/:productId', shopController.getProduct)

// // cart GET
// router.get('/cart', shopController.getCart)

// // cart POST
// router.post('/cart', shopController.postCart)

// // cart delete item POST
// router.post('/cart-delete-item', shopController.postCartDeleteProduct)

// // order POST
// router.post('/create-order', shopController.postOrder)

// // orders GET
// router.get('/orders', shopController.getOrders)

// // checkout ...
// router.get('/checkout', shopController.getCheckout)

module.exports = router