var express = require('express')
var router = require('./server/router.js')
var bodyParser = require('body-parser')
require('dotenv').config()


var app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
var http = require('http').Server(app)

http.listen(3000, function(){
  console.log('Hola mundo')
})

app.use('/',router)
