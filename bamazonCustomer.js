var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Cocochanel12",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  // console.log("connected as id " + connection.threadId);
  displayItems();
});



function displayItems(){
	console.log("Selecting all products...\n");	
	connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.log(res);
    // connection.end();

inquirer.
	prompt([
	{
		name:"id",
		type: "input",
		message:"Enter ID of item you would like to purchase:"
	},
	{	
		name: "units",
		type: "input",
		message: "How many would you like to purchase?",
		validate: function(value) {
          if (isNaN(value) === false) {
            return true;
          }
          return false;
        }
	}	
])
.then(function(answer){
	console.log(`You purchased ${answer.id}`);
	var chosenItem;
	});
	
	})
}