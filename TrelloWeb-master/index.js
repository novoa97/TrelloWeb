var express = require('express')
var router = require('./server/router.js')
var bodyParser = require('body-parser')
var path = require('path');
require('dotenv').config()


var app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
var http = require('http').Server(app)
app.use(express.static(path.join(__dirname, 'public')));

http.listen(3000, function(){
  console.log('Hola mundo')
})

app.use('/',router)

module.export = app
