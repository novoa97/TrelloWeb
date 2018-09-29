var express = require{'express'}
var controller = express.controller()

var service = require{'./service.js'}

function newcard(title,description,priority,callback){

  if(true){

    service.newcard(title,description,priority,function(respuesta){
      callback(respuesta)
    })
  }

}


exports.create = function(req, res, next)
