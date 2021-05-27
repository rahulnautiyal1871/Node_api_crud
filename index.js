require('./helper/mongodb')
const express = require('express');
var bodyParser = require('body-parser');
const morgan = require('morgan')
// port number
const port = 3000;
 
var app = express()
 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.use(morgan("dev"));

const user =require('./router/index');
const auth =require('./router/auth');

// routers-of-api
app.use('/api',user)
app.use('/auth',auth)

app.listen(port, function(){console.log(`App is running port number : ${port} `)})