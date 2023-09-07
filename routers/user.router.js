const express = require('express');
const { userLogin, userSignUp } = require('../controllers/user.controller');

const router = express.Router()

router.post('/signUp', userSignUp)
router.post('/login', userLogin);

module.exports = router