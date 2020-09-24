const express = require("express"),
	  app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res) {
	res.render("index");
});

var port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log("Tyre catalogue is connected");
})