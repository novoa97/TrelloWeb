var service = require('./service.js')

function newCardController(title,description,priority,callback){

  if(true){

    service.newCardService(title,description,priority,function(respuesta){
      callback(respuesta)
    })
  }

}


module.exports = {
  newCardController
}
