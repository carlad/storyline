var express = require('express'),
  request = require('request'),
  util = require('util'),
  Twilio = require('twilio-js');
 
Twilio.AccountSid = "xxxxxxxx";
Twilio.AuthToken = "xxxxxxxx";
 
var app = express();
 
app.get("/", function (req, res) {
  var socketID = Math.random()*1000000000 + (new Date()).getTime();
 
  // http://api.soundcloud.com/tracks/13158665.json
  var url = "http://wemakeawesomesh.it/soundcloudID/twiml.php?id=13158665&socket_id=" + socketID;
  Twilio.Call.create({
    to: "+491712918840",
    from: "+14155992671",
    url: url
  }, function(e) {
    console.log("Error: " + e)
  });
});
 
app.listen(1234, function(){
  console.log("Express server listening on port 1234");
});