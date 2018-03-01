// Your survey should have 10 questions of your choosing. Each answer should be on a scale of 1 to 5 based 
// on how much the user agrees or disagrees with a question.

// Your server.js file should require the basic npm packages we've used in class: express, body-parser 
// and path.

var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('app/public'));

require("./app/routing/htmlRoutes.js")(app);
require("./app/routing/apiRoutes.js")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});