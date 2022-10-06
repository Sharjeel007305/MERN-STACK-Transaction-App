const mongoose = require("mongoose")

 mongoose
.connect('url', {
    useNewUrlParser : true,
    useUnifiedTopology: true
})

const connection = mongoose.connection

connection.on("error", err => console.log(err))

connection.on("connected", err => console.log('Mongo DB Connection Successfully'))
