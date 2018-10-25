var trello = require('./trello.js')

//id of labels trello
var trivial = "5904a42cced82109ff664327"
var major = "5904a42cced82109ff664323"
var minior = "5904a42cced82109ff664324"

function newCardService( title, description, priority, callback){
  var priority_id
  if ( priority == "3") priority_id = major
  if ( priority == "2") priority_id = trivial
  if ( priority == "1") priority_id = minior
  var card={
    title: title,
    description: description,
    priority: priority_id
  }
  trello.create_card( card, function(response){
    console.log("Created")
  })
}

module.exports = {
  newCardService
}
