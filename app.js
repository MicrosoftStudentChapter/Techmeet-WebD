const express = require ("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));  //PUBLIC --> static files (css)

app.get("/", function(req, res) {
    res.render("index.ejs")
});

app.get("/about", function(req, res) {
    res.render("about.ejs")
});

app.get("/game", function(req, res) {
    res.render("game.ejs")
});

//Server 
var port = process.env.PORT || 3000;
app.listen(port, function(){
	console.log("server has started !");
});