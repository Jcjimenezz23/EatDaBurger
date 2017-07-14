//requiring dependencies
var express = require("express");
var router = express.Router();

//importing the model burger.js file
var burger= require("../models/burger.js");

//creating routes
router.get("/", function(req. res) {
	burger.selectAll(function(data) {
		var hbsObject = {
			burgers: data
		};
		res.render("index", hbsObject);
	});
});

router.post("/burgers", function(req, res) {
	burger.insertOne([
		"burger_name"
		], [
		req.body.burger_name
		], function(data) {
			res.redirect("/");
		});
});

router.put("/burgers/:id", function(req, res) {
	var condition = "id = " + req.params.id;

	//update that the buger has been devoured
	burger.updateOne({
		devoured: true
	}, condition, function(data) {
		res.redirect("/");
	});
});

//exporting routes to server.js
module.exports = router;