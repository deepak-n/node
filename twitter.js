var express = require('express')
var app = express.createServer()
app.get('/', function(req,res) {
  res.send('Welcome to twitter using node.js')
})