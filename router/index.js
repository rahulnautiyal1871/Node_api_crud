const express = require('express');
const { get } = require('mongoose');
const router = express.Router();
// calling-routes
const { createUser,getAllUser,updateUser,deleteUser,getSingleUser } = require('./controllers/userController')

// calling middleware
const { checkEmail } = require('./middlewares/userMiddleware')

router.get('/user',getAllUser)

router.get('/user/:user_id',getSingleUser)

router.post('/user',checkEmail,createUser)

router.put('/user/:user_id',updateUser)

router.delete('/remove/:user_id',deleteUser)



module.exports =router;