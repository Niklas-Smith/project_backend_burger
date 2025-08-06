/*  includera dotenv */
require("dotenv").config();
/*  includera express  */
const express = require("express");
/*  includera sqliter3 */
const sqlite3 = require("sqlite3").verbose();

// skapar databasen
const db = new sqlite3.Database(process.env.DATABASE);



db.serialize(()=> {
/*ta bort tabelen om den finns */
db.run("DROP TABLE IF EXISTS users;")
db.run("DROP TABLE IF EXISTS burgers;")
db.run("DROP TABLE IF EXISTS accessories;")
db.run("DROP TABLE IF EXISTS drink;")
db.run("DROP TABLE IF EXISTS dips;")
db.run("DROP TABLE IF EXISTS other;")

/* skapar mina tabeler*/
db.run(
    
    `
  CREATE TABLE users (
id INTEGER PRIMARY KEY AUTOINCREMENT,
email VARCHAR(255) NOT NULL UNIQUE,
username VARCHAR(255) NOT NULL UNIQUE,
password VARCHAR(255) NOT NULL,
created DATETIME DEFAULT CURRENT_TIMESTAMP
);
`);



db.run(
    
    `
  CREATE TABLE burgers (
id INTEGER PRIMARY KEY AUTOINCREMENT,
burgername VARCHAR(255) NOT NULL ,
weightprotein INTERGER NOT NULL,
accessoriesone VARCHAR(255) NOT NULL,
accessoriestwo VARCHAR(255) NOT NULL,
priceone INTERGER NOT NULL,
pricetwo INTERGER NOT NULL,
created DATETIME DEFAULT CURRENT_TIMESTAMP
);
`);

db.run(
    
    `
  CREATE TABLE accessories (
id INTEGER PRIMARY KEY AUTOINCREMENT,
accessoriesname VARCHAR(255) NOT NULL ,
accessoriesprice INTERGER NOT NULL,
accessoriescontent VARCHAR(255) NOT NULL,
created DATETIME DEFAULT CURRENT_TIMESTAMP
);
`);

db.run(
    
    `
  CREATE TABLE drink (
id INTEGER PRIMARY KEY AUTOINCREMENT,
drinkname VARCHAR(255) NOT NULL ,
drinkprice INTERGER NOT NULL,
created DATETIME DEFAULT CURRENT_TIMESTAMP
);
`);

db.run(
    
    `
  CREATE TABLE dips (
id INTEGER PRIMARY KEY AUTOINCREMENT,
dipsname VARCHAR(255) NOT NULL ,
dipsprice INTERGER NOT NULL,
dipscontent VARCHAR(255) NOT NULL,
created DATETIME DEFAULT CURRENT_TIMESTAMP
);
`);


db.run(
    
    `
  CREATE TABLE other (
id INTEGER PRIMARY KEY AUTOINCREMENT,
othername VARCHAR(255) NOT NULL ,
otherprice INTERGER NOT NULL,
created DATETIME DEFAULT CURRENT_TIMESTAMP
);
`);


console.log("Table is created")


}



);

/*stänger databasen */

db.close(); 