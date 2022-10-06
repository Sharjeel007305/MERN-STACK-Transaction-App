const express = require('express')
const dbConnect = require('./dbConnect')
const app = express()
app.use(express.json())
const userRouter = require('./routes/userRoute')
const transactionRouter = require('./routes/transactionRoute')

app.use('/api/users/', userRouter)
app.use('/api/transactions/', transactionRouter)

const port = 5000


app.listen(port,() => console.log(`Node JS Server started at port ${port}!`))