var express = require('express')
var router = require('./server/router.js')
var bodyParser = require('body-parser')
<<<<<<< HEAD
var path = require('path');
require('dotenv').config()
=======

>>>>>>> e19b1541c79f156519b0bbfc76e695106cf8f502


var app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
var http = require('http').Server(app)
<<<<<<< HEAD
app.use(express.static(path.join(__dirname, 'public')));
=======
>>>>>>> e19b1541c79f156519b0bbfc76e695106cf8f502

http.listen(3000, function(){
  console.log('Hola mundo')
})

app.use('/',router)
<<<<<<< HEAD

module.export = app
=======
>>>>>>> e19b1541c79f156519b0bbfc76e695106cf8f502
