-- create and use dedicated db
CREATE DATABASE insta;
USE insta;

-- Create tables and insert some data:
CREATE TABLE users (
 id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
 username VARCHAR(255) NOT NULL,
 password VARCHAR(255) NOT NULL, -- not encrypted for now :P
 email VARCHAR(255) NOT NULL UNIQUE,
 description VARCHAR(500)
);
-- insert few users
INSERT INTO users (
  username,
  password,
  email,
  description
)
VALUES (
  'Gigi',
  'mypassword123',
  'gigi@gmail.com',
  'I love MySQL'
);
INSERT INTO users (
  username,
  password,
  email
)
VALUES (
  'Johnny',
  'mypassword456',
  'johnny@gmail.com'
);
INSERT INTO users (
  username,
  password,
  email,
  description
)
VALUES (
  'Matt',
  'mypassword789',
  'matt@gmail.com',
  'Something about me'
);

CREATE TABLE images (
 id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
 src VARCHAR(255) NOT NULL,
 user_id INT NOT NULL,
 caption VARCHAR(500),
 FOREIGN KEY (user_id) REFERENCES users(id)
);
-- insert few images
INSERT INTO images (
  src,
  user_id,
  caption
)
VALUES (
  'matt-img1.png',
  3,
  'My first selfie :P'
);
INSERT INTO images (
  src,
  user_id,
  caption
)
VALUES (
  'matt-img2.png',
  3,
  'My second selfie :P'
);
INSERT INTO images (
  src,
  user_id,
  caption
)
VALUES (
  'matt-img3.png',
  3,
  'My third selfie :P'
);
INSERT INTO images (
  src,
  user_id,
  caption
)
VALUES (
  'gigi-img1.png',
  1,
  "Gigi's face"
);

CREATE TABLE popularity (
 user_id INT NOT NULL,
 image_id INT NOT NULL,
 FOREIGN KEY (user_id) REFERENCES users(id),
 FOREIGN KEY (image_id) REFERENCES images(id)
);
-- create some popularity
INSERT INTO popularity (
  user_id,
  image_id
)
VALUES (
  2,
  1
);
INSERT INTO popularity (
  user_id,
  image_id
)
VALUES (
  3,
  1
);

CREATE TABLE following (
 user_id INT NOT NULL,
 following_id INT NOT NULL,
 FOREIGN KEY (user_id) REFERENCES users(id),
 FOREIGN KEY (following_id) REFERENCES users(id)
);
-- make peeps follow each other
INSERT INTO following (
  user_id,
  following_id
)
VALUES (
  1,
  2
);
INSERT INTO following (
  user_id,
  following_id
)
VALUES (
  1,
  3
);
INSERT INTO following (
  user_id,
  following_id
)
VALUES (
  2,
  1
);

-- count how many times image 1 was liked --> number of likes
SELECT COUNT(user_id)
FROM popularity
WHERE image_id = 1;
-- how many people follow user Gigi (id 1)
SELECT COUNT(following_id)
FROM following
WHERE following_id = 1;
-- how many people Gigi (id 1) follows
SELECT COUNT(user_id)
FROM following
WHERE user_id = 1;
