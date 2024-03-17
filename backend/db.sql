CREATE DATABASE biblioteka;

CREATE TABLE author(
	id int NOT NULL AUTO_INCREMENT,
    author VARCHAR(255) NOT NULL,
	PRIMARY KEY(id)
);

CREATE TABLE books(
	id int NOT NULL AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
	author_id int NOT NULL,
    releaseYear int NOT NULL,
    available TINYINT(1),
    FOREIGN KEY (author_id) REFERENCES author(id),
	PRIMARY KEY(id)
);

CREATE TABLE users(
	id int NOT NULL AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL,
    userpassword VARCHAR(255) NOT NULL,
    isadmin TINYINT(1),
	PRIMARY KEY(id)
);

CREATE TABLE cart(
    id int NOT NULL AUTO_INCREMENT,
    user_id int NOT NULL,
    book_id int NOT NULL,
    amount int NOT NULL,
    return_date DATE,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (book_id) REFERENCES books(id),
    PRIMARY KEY(id)
);


INSERT INTO author(author) VALUES('Me');
INSERT INTO books(title,author_id,releaseYear,available) VALUES('My myself and I', 1 , 2024, 1);
INSERT INTO users(username,userpassword,isadmin) VALUES('Kevin','Kevin',1);
INSERT INTO cart(user_id,book_id,amount,return_date) VALUES(1,1,1,'2024-01-01');

