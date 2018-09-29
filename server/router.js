var express = require('express')
var router = express.Router()

//var controlador = require('./server/controller.js')


router.get('/', function(req,res){
  res.send("Hola navegador")
})
router.get('/post',function(req,res){
  res.send("adios")
})

module.exports = router
