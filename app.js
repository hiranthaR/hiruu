var express = require('express')
var body_parser = require('body-parser');
var mongoose = require('mongoose');

var app = express()

mongoose.connect('mongodb://hiruu:Hiruu123@ds121415.mlab.com:21415/heroku_zmtgbrrl');

var index_controller = require('./controllers/index_controller')
var login_validate_controller = require('./controllers/login_validate_controller')

app.set('port', (process.env.PORT || 5000))
app.use(express.static('./public'))
app.set('view engine','ejs')

app.use(body_parser.urlencoded({
  extended: true
}));

app.use(body_parser.json());

login_validate_controller(app)
index_controller(app)

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})