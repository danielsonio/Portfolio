// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var exphbs = require("express-handlebars");
var path = require("path");
//Models
var Example = require("./models/Example.js");

var Portfolio = require("./data/portfolio.js")


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



app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
