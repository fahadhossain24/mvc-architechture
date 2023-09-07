const mongoose = require('mongoose')
const {Schema} = mongoose;

const userSchema = new Schema({
    name: String,
    phone: {
        type: String,
        required: [true, 'Phone number is required'],
        unique: true,
        lowercase: true,
    }, 
    password: {
        type: String,
        required: [true, 'Passsword is required'],
        minlength: [6, 'Minimum password length is 6 characters']
    }
})

const User = mongoose.model('user', userSchema);

module.exports =  User