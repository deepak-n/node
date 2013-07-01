var express = require('express')
 
var app = express.createServer()
app.listen(8000)
 
var tweets = []
 
app.get('/', function(req, res){
  res.send('Welcome to Node twitter')
}}
 
app.post('/send', express.bodyParser(), function (req, res)) {
  if (req.body && req.bodyParser(), function(req, res){
    tweets.push(req.body.tweet)
    res.send({status:"ok", message: "tweet received"})
  } else {
    //no tweet?
    res.send({status:"nok", message: "No tweet received"})
  }
  })
app.get('/tweets', function(req,res) {
  res.send(tweets)
})