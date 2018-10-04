var express = require('express')
var router = express.Router()
var http = require('http'),
    qs = require('querystring');

var controlador = require('./controller.js')

router.get("/newcard", function(req, res){
  res.sendFile("newCard.html")
} )
router.get("/login", function(req, res){
  res.sendFile("login.html")
} )
router.post("/newcard", function (req, res){
  console.log("new card")
  console.log(req.body)
  var title = req.body.title
  var desc = req.body.desc
  var priority = req.body.priority
  controlador.newCardController(title, desc, priority, function(respuesta){
    console.log("Recibido")
    res.send("Holi")
  })
})
router.post("/login", function (req, res){
  var user = req.body.title
  var desc = req.body.desc
  var priority = req.body.priority
  controller.newCard(title, description, priority, function(respuesta){
    console.log("Recibido")
    res.send("Holi")
  })
})


module.exports = router
