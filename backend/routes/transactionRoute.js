const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactioncontroller');

//Create & Register 
router.post("/add-transaction",transactionController.add_transaction);
router.get("/get-all-transaction",transactionController.Get_transaction);



module.exports = router;