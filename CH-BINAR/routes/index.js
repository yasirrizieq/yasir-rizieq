const express = require('express');
const router = express.Router();
const user = require('../controller/user');
const product = require('../controller/product');
const supplier = require('../controller/supplier');
const component = require('../controller/component');


router.get('/', (req, res) => res.status(200).json({message: "welcome to blog api"}));

router.get('/users', user.index);
router.get('/users/:user_id', user.show);
router.post('/users', user.store);
router.put('/users/:user_id', user.update);
router.delete('/users/:user_id', user.destroy);


router.get('/components', component.index);
router.get('/components/:component_id', component.show);
router.post('/components', component.store);
router.put('/components/:component_id', component.update);
router.delete('/components/:component_id', component.destroy);

router.get('/suppliers', supplier.index);
router.get('/suppliers/:supplier_id', supplier.show);
router.post('/suppliers', supplier.store);
router.put('/suppliers/:supplier_id', supplier.update);
router.delete('/suppliers/:supplier_id', supplier.destroy);

router.get('/products', product.index);
router.get('/products/:product_id', product.show);
router.post('/products', product.store);
router.put('/products/:product_id', product.update);
router.delete('/products/:product_id', product.destroy);

module.exports = router;