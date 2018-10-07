var request = require("request");


function create_card( card, callback){
  console.log("desc " + card.description)
  var options = { method: 'POST',
    url: 'https://api.trello.com/1/cards',
    qs:
    { name: card.title,
      desc: card.description,
      pos: 'top',
      idList: '5904a43ccf469f5606efb39e',
      idLabels: card.priority,
      idMembers: '5a9fc38d12b8f5cb4aa697ca',
      keepFromSource: 'all',
      key: process.env.KEY,
      token: process.env.TOKEN }
  };
  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    console.log(body);
    callback("ok")
  });
}




module.exports = {
  create_card
}
