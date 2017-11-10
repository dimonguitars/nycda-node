-- create database
CREATE DATABASE test;
-- select a database to use
USE test;
-- create a table
CREATE TABLE people (
 id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
 username VARCHAR(255) NOT NULL UNIQUE,
 first_name VARCHAR(255),
 last_name VARCHAR(255) NOT NULL,
 age INT DEFAULT 21
);
-- describe table
desc people;
-- insert data into the table
INSERT INTO people (
  username,
  first_name,
  last_name,
  age
)
VALUES (
  'antonina1234',
  'Antonina',
  'Serdyukova',
  18
);
-- testing the default age on insert without the age provided
INSERT INTO people (
  username,
  first_name,
  last_name
)
VALUES (
  'gigi',
  'Gigi',
  'Moore'
);
-- see all entries
SELECT * FROM people;
-- delete from table by user id
DELETE FROM people
WHERE id = 4;
-- delete from table by user name
DELETE FROM people
WHERE username = 'gigi';
-- update a row based on condition
UPDATE people
SET username = 'dana123', age = 56
WHERE last_name = 'Moore';
-- delete table
DROP TABLE people;


-- First exercise
CREATE TABLE users (
 id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
 name VARCHAR(255) NOT NULL,
 email VARCHAR(255) NOT NULL UNIQUE,
 password VARCHAR(255) NOT NULL,
 created_at DATETIME NOT NULL,
 updated_at DATETIME NOT NULL,
 num_logins INT NOT NULL DEFAULT 0,
 is_email_address_confirmed TINYINT(1) NOT NULL
);
INSERT INTO users (
  name,
  email,
  password,
  created_at,
  updated_at,
  is_email_address_confirmed
)
VALUES (
  'Laura',
  'laura@test.com',
  'qwerty12345',
  CURRENT_TIMESTAMP(),
  CURRENT_TIMESTAMP(),
  0
);

CREATE TABLE products (
 id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
 name VARCHAR(255) NOT NULL,
 price FLOAT NOT NULL,
 is_in_stock TINYINT(1) NOT NULL,
 sku VARCHAR(255) NOT NULL UNIQUE
);
INSERT INTO products (
  name,
  price,
  is_in_stock,
  sku
)
VALUES (
  'color t-shirt',
  67.50,
  1,
  'GRD90RS'
);

-- Exercise slide 30
CREATE TABLE users2 (
 id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
 name VARCHAR(255) NOT NULL
);
CREATE TABLE profiles (
 id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
 userid INT,
 photo VARCHAR(255),
 FOREIGN KEY (userid) REFERENCES users2(id)
);
INSERT INTO users2 (
  name
)
VALUES (
  'Alberto'
);
INSERT INTO users2 (
  name
)
VALUES (
  'Sally'
);
INSERT INTO users2 (
  name
)
VALUES (
  'Roberto'
);
INSERT INTO profiles (
  userid,
  photo
)
VALUES (
  3,
  'roberto.png'
);
-- Will give us error because the user in user2 with such a userid doesn't exisit yet
-- Error: Cannot add or update a child row: a foreign key constraint fails
INSERT INTO profiles (
  userid,
  photo
)
VALUES (
  10,
  'will-give-us-error.png'
);
