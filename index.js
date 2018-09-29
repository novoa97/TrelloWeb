var express = require('express')
var router = require('./server/router.js')

var app = express()
var http = require('http').Server(app)

http.listen(3000, function(){
  console.log('Hola mundo')
})

app.use('/',router)
