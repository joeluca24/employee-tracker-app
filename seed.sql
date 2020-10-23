
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
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
role_id INT NOT NULL,
manager_id INT,
PRIMARY KEY (id)
);
INSERT INTO `employee_tracker_db`.`department`
(`id`,
`name`)
VALUES
( 1,
"Programming");
INSERT INTO `employee_tracker_db`.`role`
(`id`,
`title`,
`salary`,
`department_id`)
VALUES
(1,
"tech",
45000,
1);
INSERT INTO `employee_tracker_db`.`employee`
(`id`,
`first_name`,
`last_name`,
`role_id`,
`manager_id`)
VALUES
(3,
"bob",
"roberta",
1,
2);
INSERT INTO `employee_tracker_db`.`role`
(`id`,
`title`,
`salary`,
`department_id`)
VALUES
(2,
"manager",
1000000,
1);
INSERT INTO `employee_tracker_db`.`employee`
(`id`,
`first_name`,
`last_name`,
`role_id`,
`manager_id`)
VALUES
(2,
"daniel",
"smith",
2,
NULL);
















