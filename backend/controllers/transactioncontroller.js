const { response } = require('express');
const transaction = require('../models/Transaction')


async function add_transaction (req,res) {
    try{
       const newtransaction = new transaction(req.body);
       await newtransaction.save();
       res.send('transaction Added successfully')
    } catch(error){
        res.status(500).json(error);
    }
};

async function Get_transaction (req,res) {
    try{
       const transactions = await transaction.find({userId: req.body.userId});
       res.send(transactions);
    } catch(error){
        res.status(500).json(error);
    }
};

module.exports = {
    add_transaction,
    Get_transaction
};