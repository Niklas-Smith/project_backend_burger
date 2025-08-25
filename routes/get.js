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




// skapar ett get begäran där man få ut en hamburgare baserat på ett id som finns i tabelen burgers.
router.get("/burgers/:id", (req,res) => {

const burgerid = req.params.id;

const sql = 'SELECT * FROM burgers WHERE id = ?'

db.all(sql, burgerid , (err, result) => {

  if(err) {
 return res.status(500).json({message:  "samething went wrong "  });

      
  } 

    res.json(result)


} );

}) ;  




// skapar ett get begäran där man få ut ett tillbehör baserat på ett id som finns i tabelen accessories.
router.get("/accessories/:id", (req,res) => {

const accessoriesid = req.params.id;

const sql = 'SELECT * FROM accessories WHERE id = ?'

db.all(sql, accessoriesid , (err, result) => {

  if(err) {
 return res.status(500).json({message:  "samething went wrong "  });

      
  } 

    res.json(result)


} );

}) ;  



// skapar ett get begäran där man få ut ett dippor baserat på ett id som finns i tabelen dips.
router.get("/dips/:id", (req,res) => {

const dippid = req.params.id;

const sql = 'SELECT * FROM dips WHERE id = ?'

db.all(sql, dippid , (err, result) => {

  if(err) {
 return res.status(500).json({message:  "samething went wrong "  });

      
  } 

    res.json(result)


} );

}) ;  



// skapar ett get begäran där man få ut ett dryck baserat på ett id som finns i tabelen drink.
router.get("/drink/:id", (req,res) => {

const drinkid = req.params.id;

const sql = 'SELECT * FROM drink WHERE id = ?'

db.all(sql, drinkid , (err, result) => {

  if(err) {
 return res.status(500).json({message:  "samething went wrong "  });

      
  } 

    res.json(result)


} );

}) ;  

// skapar ett get begäran där man få ut ett extra baserat på ett id som finns i tabelen other.
router.get("/other/:id", (req,res) => {

const otherid = req.params.id;

const sql = 'SELECT * FROM other WHERE id = ?'

db.all(sql, otherid , (err, result) => {

  if(err) {
 return res.status(500).json({message:  "samething went wrong "  });

      
  } 

    res.json(result)


} );

}) ;  



module.exports = router;