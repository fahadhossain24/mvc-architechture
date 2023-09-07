const express = require('express');
const uerRouter = require('./routers/user.router')
const mongoose = require('mongoose')
const app = express()

// database connection 
mongoose.connect('mongodb://127.0.0.1:27017').then(() => {
    console.log('database connection success')
})
// server
const port = 5001;

app.use(express.json())

app.use(uerRouter)



app.listen(port, () => {
    console.log('server running at port', port)
})