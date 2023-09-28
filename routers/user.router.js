const express = require('express');
const userControllers = require('../controllers/user.controller');


const router = express.Router()

router.post('/signUp', userControllers.userSignUp)
router.post('/login', userControllers.userLogin);

module.exports = router