const mongoose = require('mongoose')
const {Schema} = mongoose;

const todoSchema = new Schema({
    todoTitle: String,
    todoBody: String,
    status: {
        type: String,
        enum: ['incompleted', 'completed']
    }
    
})

const Todo = mongoose.model('todo', todoSchema);

module.exports =  Todo