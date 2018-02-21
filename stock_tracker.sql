DROP DATABASE bamazon_db;
CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
	id INT AUTO_INCREMENT NOT NULL,
	product_name VARCHAR(30),
	department_name VARCHAR(30),
    product_price DECIMAL(10,2) NULL,
	quantity INT NOT NULL,
	PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, product_price, quantity)
VALUES 
("Belvita Biscuits", "Groceries", 4.99, 100), 
("Make Up Removing Wipes", "Health and Beauty", 5.99, 150), 
("Greenies Dental Sticks", "Pets", 39.99, 80), 
("Eggs", "Food", 1.99, 100), 
("Rainboots", "Shoes", 29.99, 20),
("Flaming Hot Cheetos", "Food", 1.99, 200),
("Speaker", "Electronics", 32.34, 300);