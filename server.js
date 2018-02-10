// Dependencies
var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());

// Router
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);
require(path.join(__dirname, './app/routing/apiRoutes'))(app);

// Listener
app.listen(PORT, function() {
  console.log('App listening on PORT: ' + PORT);
});
