<h2> Bamazon: NODE.JS + SQL </h2>

Bamazon is an Amazon-like application used through the terminal. It requires the installation of npm packages, 'inquirer' and 'mysql'.

Once the packages are installed and you have secured a connection to a SQL Database, you can run the application as follows:

Enter 'node bamazonCustomer.js' into the terminal and press enter.
![initiate](images/Initiate_App.png)

Once the app is initiated, it will display the items available for purchase.
![initiate](images/Display_items.png)

It will then prompt you to enter the ID of the product you wish to purchase, as well as the # of units.
![initiate](images/Enter_info.png)

Upon entering this information, the app will update the quantity of the product you chose and will display your total cost for that item.

![initiate](images/Output.png)

If the number of units you wish to purchase is unavailable, you will get a message letting you know there is insufficient quantity.

![initiate](images/Insufficient_quantity.png)


You can continue to run the app, or press CTRL + C to exit.