DROP DATABASE IF EXISTS bamazon_db;
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
VALUES ("Belvita", "Groceries", 4.99, 50), ("Make Up Removing Wipes", "Health and Beauty", 5.99, 70), ("Greenies Dental Sticks", "Pets", 39.99, 20);

-- SELECT * FROM products;