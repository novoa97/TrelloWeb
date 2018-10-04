function newCardService( title, description, priority, callback){
  var card={
    title: title,
    description:description,
    priority:priority
  }
  console.log(card)
  callback("OK");
}

module.exports = {
  newCardService
}
