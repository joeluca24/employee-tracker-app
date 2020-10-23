DROP DATABASE IF EXISTS greatBay_DB;
CREATE DATABASE greatBay_DB;

USE greatBay_DB;

CREATE TABLE bidders(
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE auctions(
  id INT NOT NULL AUTO_INCREMENT,
  item_name VARCHAR(100) NOT NULL,
  category VARCHAR(45) NOT NULL,
  starting_bid INT default 0,
  highest_bid INT default 0,
  winning_bidder_id INT NULL, -- need a null because an auction can start without a bidder
  FOREIGN KEY (winning_bidder_id) REFERENCES bidders(id), -- the bidder has to exist before updating auctions with a bidder
  PRIMARY KEY (id)
);


INSERT bidders VALUES (0, "Jivko", "A"), (0, "Bob", "B");

SELECT * FROM auctions;
SELECT * FROM bidders;