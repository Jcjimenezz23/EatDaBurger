 //connection to the connection.js file
 var connection = require("../config/connection.js");

 var orm = {
 	//function that will output all burgers in the database
 	selectAll(): function(tableInput, cb) {
 		var queryString = "SELECT * FROM " + tableInput;

 		connection.query(queryString, function(err, result) {
 			if (err) throw err;
 			cb(result);
 		});
 	},

 	insertOne(): function(table, col, vals, cb) {
 		var queryString = "INSERT ONTO " + table + " (' + cols.toString() + ') " + "VALUES (' +printQuestionMarks(vals.length) + ') ";
 		console.log(queryString)

 		connection.query(queryString, vals, function(err, result) {
 			cb(results);
 		});
 	},

 	updateOne(): function(table, objColVals, condition, cb) {
 		var queryString = "UPDATE" + table + "SET" + objToSql(objColVals) + "WHERE" + condition;

 		console.log(queryString);

 		connection.query(queryString, function(err, result) {
 			cb(result);
 		});
 	}
 };

 module.exports = orm;