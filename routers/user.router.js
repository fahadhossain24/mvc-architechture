const express = require('express');
const userControllers = require('../controllers/user.controller');
const { viewCount } = require('../middleware/viewCount');
const { showDate } = require('../middleware/showDate');
const { requestLimiter } = require('../middleware/requestLimiter');

const router = express.Router()

router.post('/signUp', userControllers.userSignUp)
router.post('/login',viewCount, showDate, requestLimiter, userControllers.userLogin);

module.exports = router