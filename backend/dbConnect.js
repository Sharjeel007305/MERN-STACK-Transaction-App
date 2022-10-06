const mongoose = require("mongoose")

 mongoose
.connect('mongodb+srv://Sharjeel-1248:Sharjeel-1248@transaction.ztwzrg6.mongodb.net/test', {
    useNewUrlParser : true,
    useUnifiedTopology: true
})

const connection = mongoose.connection

connection.on("error", err => console.log(err))

connection.on("connected", err => console.log('Mongo DB Connection Successfully'))
