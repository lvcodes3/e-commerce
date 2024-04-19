CREATE DATABASE ecommerce
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;

CREATE TABLE inventory (
    id SERIAL NOT NULL PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    category TEXT NOT NULL,
    price NUMERIC NOT NULL,
    quantity INTEGER NOT NULL,
    images TEXT[] NOT NULL,
    status TEXT NOT NULL,
    date_added TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    last_updated TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
/* status: active, inactive, out of stock */

CREATE TABLE orders (
    id SERIAL NOT NULL PRIMARY KEY,
    customer_full_name TEXT NOT NULL,
    customer_email TEXT NOT NULL UNIQUE,
    customer_address TEXT NOT NULL,
    customer_city TEXT NOT NULL,
    customer_state TEXT NOT NULL,
    customer_zip TEXT NOT NULL,
    order_total NUMERIC NOT NULL,
    order_status TEXT[] NOT NULL,
    order_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    last_updated TIMESTAMP[] NOT NULL DEFAULT ARRAY[CURRENT_TIMESTAMP]
);
/* order_status: processing, shipped, delivered, cancelled, returned, partially shipped, refunded */

CREATE TABLE order_items (
    id SERIAL NOT NULL PRIMARY KEY,
    order_id INTEGER NOT NULL REFERENCES orders(id),
    inventory_id INTEGER NOT NULL REFERENCES inventory(id),
    quantity INTEGER NOT NULL,
    price NUMERIC NOT NULL,
    CONSTRAINT fk_order FOREIGN KEY (order_id) REFERENCES orders(id),
    CONSTRAINT fk_inventory FOREIGN KEY (inventory_id) REFERENCES inventory(id)
);

INSERT INTO inventory
(name, description, category, price, quantity, images, status)
VALUES (
	'Turbo',
	'Engine Turbo in excellent condition.',
	'Automotive Parts',
	209.99,
	25,
	ARRAY[
        'https://images.pexels.com/photos/7565164/pexels-photo-7565164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		'https://images.pexels.com/photos/7565170/pexels-photo-7565170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		'https://images.pexels.com/photos/7565165/pexels-photo-7565165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
	],
	'active'
);