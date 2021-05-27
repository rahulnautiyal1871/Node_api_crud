const express = require('express');
const { get } = require('mongoose');
const router = express.Router();
// calling-routes
const { createUser,getAllUser,updateUser,deleteUser,getSingleUser } = require('./controllers/userController')

// calling middleware
const { checkEmail } = require('./middlewares/userMiddleware');
// authentication-middlewares
const auth = require('./middlewares/authMiddleware')

router.get('/user',auth,getAllUser);

router.get('/user/:user_id',auth,getSingleUser)

router.post('/user',checkEmail,createUser)

router.put('/user/:user_id',auth,updateUser)

router.delete('/remove/:user_id',auth,deleteUser)



module.exports =router;