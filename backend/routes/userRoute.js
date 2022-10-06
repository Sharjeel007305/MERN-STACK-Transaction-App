const express = require('express');
const router = express.Router();
const UserController = require('../controllers/usercontroller');

//Create & Register 
router.post("/api/users",UserController.create_User);
router.post("/api/users",UserController.user_register);

