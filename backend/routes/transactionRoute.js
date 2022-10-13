const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactioncontroller');

//Create & Register 
router.post("/add-transaction",transactionController.add_transaction);
router.post("/get-all-transaction",transactionController.Get_transaction);
router.post ("/eidt-transaction", transactionController.edit_transaction);
router.post ("/delete-transaction", transactionController.delete_transaction);







module.exports = router;