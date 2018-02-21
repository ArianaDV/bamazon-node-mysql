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
    	console.log("Product ID: " + res[i].id + " Item: " + res[i].product_name + " Price: " + res[i].product_price + " Quantity: " + res[i].quantity);
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
    		
    		else if (answer.units > res[0].quantity)
    		{
    			console.log("---------------------");
    			console.log("Insufficient quantity!");
    			console.log("---------------------");
    		}else 
    		{
    			var newQuantity = res[0].quantity - answer.units
    			var totalCost = res[0].product_price * answer.units
    			connection.query(
				"UPDATE products SET ? WHERE ?",
				[
			     {
			        quantity: newQuantity
			      },
			      {
			        id: answer.id
			      }
			    ],
			    function(err, res) {
			      console.log("---------------------");
			      console.log("Your items are in your shopping cart! Your total for this item is: " + totalCost);
			      console.log("---------------------");
			      
			  		afterConnection();
			    	}
			 	);
			}			   		
    		
   		})
 	
   });
}



