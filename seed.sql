
DROP DATABASE IF EXISTS employee_tracker_db;
CREATE DATABASE employee_tracker_db;
USE employee_tracker_db;

CREATE TABLE department (
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(30),
PRIMARY KEY (id)
);
CREATE TABLE role (
id INT NOT NULL AUTO_INCREMENT,
title VARCHAR(30), 
salary  DECIMAL(9,2),
department_id INT,
PRIMARY KEY (id)
);

CREATE TABLE employee (
id INT NOT NULL AUTO_INCREMENT,
/* fill in later */
PRIMARY KEY (id)
)


