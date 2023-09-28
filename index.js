const express = require('express');
const mongoose = require('mongoose')
const userRoute = require('./routers/user.router');
const { viewCount } = require('./middleware/viewCount');
const { showDate } = require('./middleware/showDate');

const app = express()

//middleware
app.use(express.json())

// database connection 
mongoose.connect('mongodb://127.0.0.1:27017').then(() => {
    console.log('database connection success')
})



app.use('/api/v1/user', userRoute)

app.use('*', (req, res) => {
    res.send('route not found')
} )



app.listen(4000, () => {
    console.log('server running at port', 4000)
})