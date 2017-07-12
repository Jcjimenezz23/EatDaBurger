// requiring my sql
var mysql = require("mysql");

// setting up connection to the database
var connection = mysql.createConnection({
  port: 8080,
  host: "localhost",
  user: "",
  password: "",
  database: "burgers_db" 
});

// Connect to the database
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection
module.exports = connection;
