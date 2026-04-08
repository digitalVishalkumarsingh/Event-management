const express = require("express");
const router = express.Router();
const controller = require('../Controllers/usercontroller');

// User registration route
router.post('/register', controller.controlUserRegistration);

// User login route
router.post('/login', controller.controlUserLogin);
// router.get('/getlogin', controller.getloguser);



module.exports = router;