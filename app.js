var express = require('express'),
  request = require('request'),
  util = require('util'),
  Twilio = require('twilio-js');
 
Twilio.AccountSid = process.env.TWILIO_ACCOUNT
Twilio.AuthToken = process.env.TWILIO_TOKEN

var app = express();
 
app.get("/", function (req, res) {
  var socketID = Math.random()*1000000000 + (new Date()).getTime();
 
  // http://api.soundcloud.com/tracks/13158665.json
  var url = "http://wemakeawesomesh.it/soundcloudID/twiml.php?id=13158665&socket_id=" + socketID;
  Twilio.Call.create({
    to: "+4915153135071",
    from: "+16122605267",
    url: url
  }, function(e) {
    console.log("Error: " + e)
    res.write(e || "Success!")
    res.end()
  });
});
 
var port = process.env.PORT || 1234
app.listen(port, function(){
  console.log("Express server listening on port " + port);
});