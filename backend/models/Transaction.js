const mongoose = require('mongoose')

const transactionSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: true
    },
    type : {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    refernce: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
})

const TransactionModel = mongoose.model('Transactions', transactionSchema)
module.exports = TransactionModel