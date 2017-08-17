var express = require('express')
var app = express()
var request = require('request-promise');

var reqOptions = {
  method: 'GET',
  uri: 'https://bittrex.com/api/v1.1/public/getticker?market=BTC-XMR',
  headers: {
    'user-agent': 'node.js'
  },
  json: true
};
request(reqOptions)
  .then(function(parsedBody) {
    console.log('Got response : '+JSON.stringify(parsedBody, null, 2));
  })
  .catch(function(err) {
    console.log('request failed : '+err);
  });

//or just app.listen(8084)
  app.listen(8084, function(){
  console.log("go");    
});


  // next..How to update?!
  //Commit numero dos!