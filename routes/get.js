// gör så jag kan använda express
const express = require("express");
// gör så jag kan använda router 
const router = express.Router();
// gör så jag kan använda dotenv
require("dotenv").config();
// gör så jag kan använda sqlite3 
const sqlite3 = require("sqlite3").verbose()
// gör så jag kan använda bcrypt
const bcrypt = require("bcrypt")
// gör så jag kan använda jsonwebtoken
const jwt = require("jsonwebtoken")

// skapar databasen och connect.
const db = new sqlite3.Database(process.env.DATABASE);




// skapar ett get begäran där man få ut alla hamburgare som finns i tabelen burgers.
router.get("/burgers", (req,res) => {
 const sql = `SELECT * FROM burgers`;
 db.all(sql, (err,rows) => {
  if(err) {
  return  res.status(500).json({message: "samething went wrong"})

 } 
res.json(rows)
});

});
// skapar ett get begäran där man få ut alla tillbehör som finns i tabelen accessories.
router.get("/accessories", (req,res) => {
 const sql = `SELECT * FROM accessories`;
 db.all(sql, (err,rows) => {
  if(err) {
  return  res.status(500).json({message: "samething went wrong"})

 } 
res.json(rows)
});

});
// skapar ett get begäran där man få ut alla dippor som finns i tabelen dips.
router.get("/dips", (req,res) => {
 const sql = `SELECT * FROM dips`;
 db.all(sql, (err,rows) => {
  if(err) {
  return  res.status(500).json({message: "samething went wrong"})

 } 
res.json(rows)
});

});
// skapar ett get begäran där man få ut alla drycker som finns i tabelen drink.
router.get("/drink", (req,res) => {
 const sql = `SELECT * FROM drink`;
 db.all(sql, (err,rows) => {
  if(err) {
  return  res.status(500).json({message: "samething went wrong"})

 } 
res.json(rows)
});

});
// skapar ett get begäran där man få ut alla övriga som finns i tabelen other.
router.get("/other", (req,res) => {
 const sql = `SELECT * FROM other`;
 db.all(sql, (err,rows) => {
  if(err) {
  return  res.status(500).json({message: "samething went wrong"})

 } 
res.json(rows)
});

});










module.exports = router;