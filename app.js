var express = require('express'),
  request = require('request'),
  util = require('util'),
  Twilio = require('twilio-js');
 
Twilio.AccountSid = "AC29e25d51b4c18fe3db96c9ab92c54ce2";
Twilio.AuthToken = "6f2403ab253a41d834e1955a6cbbb9c1";
 
var app = express();
 
app.get("/", function (req, res) {
  var socketID = Math.random()*1000000000 + (new Date()).getTime();
 
  // http://api.soundcloud.com/tracks/13158665.json
  var url = "http://wemakeawesomesh.it/soundcloudID/twiml.php?id=13158665&socket_id=" + socketID;
  Twilio.Call.create({
    to: "+4915153135071",
    from: "+14155992671",
    url: url
  }, function(e) {
    console.log("Error: " + e)
  });
});
 
app.listen(1234, function(){
  console.log("Express server listening on port 1234");
});