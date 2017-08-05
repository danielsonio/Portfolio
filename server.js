// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var exphbs = require("express-handlebars");
var path = require("path");
//Models
var Example = require("./models/Example.js");

var Portfolio = require("./data/portfolio.js")

// Set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;

//Set port
var port = process.env.PORT || 8080;

//Initialize express
var app = express();

//Use morgan and body parser with our app
app.use(logger("dev"));
app.use(bodyParser.urlencoded({
  extended: false
}));

//Make public a static dir
app.use(express.static(__dirname + "/public"));

//Setup handlebars engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// mongodb://localhost/portfolio
mongoose.connect("mongodb://localhost/portfolio");
var db = mongoose.connection;

//Show any mongoose errors
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});


//Once logged in to the db through mongoose, log a success message
db.once("open", function() {
  console.log("Mongoose connection successful.");
});


//Routes
app.get("/", function(req, res) {
    res.render("index", { port: Portfolio });
});

app.get("/about", function(req, res) {
    res.render("about");
});

app.get("/contact", function(req, res) {
    res.render("contact");
});



app.listen(port, function() {
  console.log("App running on port", port);
})
