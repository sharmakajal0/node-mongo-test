var express = require('express')
var app = express()

app.get('/', function(req, res) {
    res.send('hello world')
})

app.get('/', function(req, res) {
    res.send('Get request to the homepage')
})

app.post('/', function(req, res) {
    res.send('POST request to the homepage')
})
