const express = require("express"),
	  app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res) {
	res.render("landing");
});

app.get("/home", function(req, res) {
	res.render("index");
});

app.get("/products", function (req, res) {
	res.render("products");
})

app.get("/services", function (req, res) {
	res.render("services");
})

var port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log("Tyre catalogue is connected");
})