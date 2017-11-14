-- Exercise slide 30
CREATE TABLE users3 (
 id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
 name VARCHAR(255) NOT NULL
);
CREATE TABLE profiles2 (
 id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
 userid INT UNIQUE, -- UNIQUE will ensure one to one relationship
 photo VARCHAR(255),
 FOREIGN KEY (userid) REFERENCES users2(id)
);
INSERT INTO users3 (
  name
)
VALUES (
  'Gigi'
);
INSERT INTO users3 (
  name
)
VALUES (
  'Lesley'
);
INSERT INTO users3 (
  name
)
VALUES (
  'Bill'
);
INSERT INTO profiles2 (
  userid,
  photo
)
VALUES (
  2,
  'stuff.png'
);
-- try to insert another entry with the same existent user_id will give us an error --> 1-to-1 relationship
INSERT INTO profiles2 (
  userid,
  photo
)
VALUES (
  2,
  'will-give-us-error.png'
);


-- Exercise slide 35
CREATE TABLE users_blog (
 id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
 name VARCHAR(255) NOT NULL
);
CREATE TABLE blog_posts (
 id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
 userid INT, -- not UNIQUE so one to many relationship is enforced
 title VARCHAR(255),
 FOREIGN KEY (userid) REFERENCES users_blog(id)
);
INSERT INTO users_blog (
  name
)
VALUES (
  'Sonya'
);
INSERT INTO users_blog (
  name
)
VALUES (
  'Mary'
);
INSERT INTO users_blog (
  name
)
VALUES (
  'John'
);
INSERT INTO blog_posts (
  userid,
  title
)
VALUES (
  3,
  'Some content here'
);
-- one to many relationship here:
INSERT INTO blog_posts (
  userid,
  title
)
VALUES (
  3,
  'New post by John.'
);

-- Exercise from slide 42
CREATE TABLE students(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);
CREATE TABLE classes(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL
);
CREATE TABLE enrollments (
 id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
 student_id INT, -- not UNIQUE so many to many relationship is enforced
 class_id INT, -- also not UNIQUE so many to many relationship is enforced
 FOREIGN KEY (student_id) REFERENCES students(id),
 FOREIGN KEY (class_id) REFERENCES classes(id)
);
INSERT INTO students (
  name
)
VALUES (
  'Nelly'
);
INSERT INTO students (
  name
)
VALUES (
  'Sean'
);
INSERT INTO students (
  name
)
VALUES (
  'Cory'
);
INSERT INTO classes (
  title
)
VALUES (
  'Inro to Ruby'
);
INSERT INTO classes (
  title
)
VALUES (
  'WDI'
);
INSERT INTO classes (
  title
)
VALUES (
  'Javascript 101'
);
INSERT INTO enrollments (
  student_id,
  class_id
)
VALUES (
  1,
  2
);
INSERT INTO enrollments (
  student_id,
  class_id
)
VALUES (
  1,
  3
);
INSERT INTO enrollments (
  student_id,
  class_id
)
VALUES (
  2,
  2
);
INSERT INTO enrollments (
  student_id,
  class_id
)
VALUES (
  2,
  1
);

SELECT students.name FROM students
WHERE students.id = 1;

SELECT classes.title FROM classes
WHERE classes.id = 1;
-- Now a useful query:
SELECT students.name, classes.title
FROM students, classes, enrollments
WHERE enrollments.student_id = students.id AND enrollments.class_id = classes.id;
