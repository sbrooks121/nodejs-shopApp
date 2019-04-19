const path = require('path')

const express = require('express')

const adminController = require('../controllers/admin')

const router = express.Router()

// admin add products GET
router.get('/add-product', adminController.getAddProduct)

// admin add products POST
router.post('/add-product', adminController.postAddProduct)

// admin edit products GET
router.get('/edit-product/:productId', adminController.getEditProduct)

// // admin edit products POST
router.post('/edit-product', adminController.postEditProduct)

// admin manage products GET
router.get('/products', adminController.getProducts)

// // admin delete products POST
router.post('/delete-product', adminController.postDeleteProduct)

module.exports = router