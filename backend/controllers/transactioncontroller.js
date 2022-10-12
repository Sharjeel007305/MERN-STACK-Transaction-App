const transaction = require('../models/Transaction')
const moment = require('moment'); // require


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
    const {frequency, selectedRange, type} = req.body;
    try{        
       const transactions = await transaction.find( {

        ... (frequency !== "custom" 
        ? {
             date : {
                $gt: moment().subtract(Number(req.body.frequency),"d").toDate()
            },
          }
        :{
             date: {
                 $gte : selectedRange[0],
                 $lte : selectedRange[1]
         }
        } ),
            
       
        userId: req.body.userId,
        ...(type!== "all" && {type})
    });
       res.send(transactions);
    } catch(error){
        console.log(error)
        res.status(500).json(error);
    }
};

module.exports = {
    add_transaction,
    Get_transaction
};