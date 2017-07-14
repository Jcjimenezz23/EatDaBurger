//importing orm.js file into burger.js
var orm = require("../config/orm.js");

//function that will call the ORM functions using specific input for the ORM
var burgers = {
	selectAll: function(cb) {
		orm.selectAll("burgers", function(res) {
			cb(res);
		});
	},
	insertOne: function(cb) {
		orm.insertOne("burgers", cols, vals, function(res) {
			cb(res);
		});
	},
	updateOne: function(cb) {
		orm.updateOne("burgers", objColVals, condition, function(res) {
			cb(res);
		});
	}
};

//exporting the database functions, basically running the file
module.exports = burger;
