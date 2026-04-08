const express = require("express");
const router = express.Router();
const controller = require('../Controllers/ordercontroller');

// User registration route
router.post('/order', controller.orderbook);





module.exports = router;