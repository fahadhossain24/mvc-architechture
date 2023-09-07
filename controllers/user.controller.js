const User = require("../models/user.model");


exports.userSignUp = async (req, res) => {
    try {
        const signUpInfo = req.body;
        const newUser = await User.create(signUpInfo)
        let tempUser; //declare a tempUser variable
        if (newUser) {
            tempUser = { ...newUser.toJSON() }
            res.status(200).json(`user successfully signup ${tempUser}`);
        } else {
            res.status(201).json('something went wrong');
        }
    } catch (err) {
        res.status(400).json(err)
    }
}

// login controller
exports.userLogin = async (req, res) => {
    try {
        const phone = req.body.phone;
        const existUser = await User.findOne({ phone })
        if (existUser) {
            res.status(200).json('user login successfull')
        } else {
            res.status(401).json('login failed')
        }
    } catch (err) {
        res.status(400).json('something went wrong')
    }
}