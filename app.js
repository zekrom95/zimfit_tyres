const express = require("express"),
	  app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res) {
	res.render("index");
});

app.listen(3000, () => {
	console.log("Tyre catalogue is connected");
})