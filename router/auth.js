const express = require('express');
const router = express.Router();

// calling-routes
const { loginUser,registerUser } = require('./controllers/authController')

// calling middleware
const { checkEmail } = require('./middlewares/userMiddleware')

router.post('/login',loginUser)

router.post('/register',checkEmail,registerUser)



module.exports =router;