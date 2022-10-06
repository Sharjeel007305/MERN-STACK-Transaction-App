const express = require('express')
const dbConnect = require('./dbConnect')
const app = express()
app.use(express.json())
const userRouter = require('./routes/userRoute')

app.use('/api/users/', userRouter)

const port = 5000


app.listen(port,() => console.log(`Node JS Server started at port ${port}!`))