const express = require('express');
const router = express.Router();
const UserController = require('../controllers/usercontroller');

//Create & Register 
router.post("/login",UserController.create_User);
router.post("/register",UserController.user_register);



module.exports = router;