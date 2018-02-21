var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Cocochanel12",
  database: "bamazon_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  afterConnection();
});

function afterConnection() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    for (var i = 0; i < res.length; i++) {
    	console.log("Product ID: " + res[i].id + " Item: " + res[i].product_name + " Price: " + res[i].product_price);
     }
    shop();
    
  });
}

function shop(){
	inquirer
    .prompt([
    {
      name: "id",
      type: "input",
      message: "What would you like to purchase? Enter ID #.",
      // choices: ["POST", "BID"]
    },
    {
      name: "units",
      type: "input",
      message: "How many units would you like to purchase?",
    }
    ])
    .then(function(answer) {
    	connection.query(
    		"SELECT * FROM products WHERE ?", 
    		{
    			id: answer.id
    		}, 
    		function(err, res){
    		if(err) throw err;
    		
    		else if (answer.units > res[0].quantity){
    			console.log("Insufficient quantity!");
    		}   		
    			
    	})
 	
   });
}
