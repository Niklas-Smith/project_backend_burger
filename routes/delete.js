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


// skapar ett delete begäran där man kan ta bort extra i other tabellen baserat på id
router.delete("/other/:id", (req,res) => {

const otherid = req.params.id;

const sql = 'DELETE FROM other WHERE id = ?'

db.run(sql, otherid , function(err)  {

  if(err) {
res.status(500).json({message:  "samething went wrong "  });

  } else if (this.changes === 0) {

   res.status(404).json({message: "other is not found"    })
  } else {

    res.json({message: "delete other " , otherid})
  }

} );

}) ;  

// skapar ett delete begäran där man kan ta bort tillbehör i accessories tabellen baserat på id
router.delete("/accessories/:id", (req,res) => {

const accessorieid = req.params.id;

const sql = 'DELETE FROM accessories WHERE id = ?'

db.run(sql, accessorieid , function(err)  {

  if(err) {
res.status(500).json({message:  "samething went wrong "  });

  } else if (this.changes === 0) {

   res.status(404).json({message: "accessories is not found"    })
  } else {

    res.json({message: "delete accessorries" , accessorieid})
  }

} );

}) ;  


// skapar ett delete begäran där man kan ta bort burger i burger tabellen baserat på id
router.delete("/burgers/:id", (req,res) => {

const burgerid = req.params.id;

const sql = 'DELETE FROM burgers WHERE id = ?'

db.run(sql, burgerid , function(err)  {

  if(err) {
res.status(500).json({message:  "samething went wrong "  });

  } else if (this.changes === 0) {

   res.status(404).json({message: "burger is not found"    })
  } else {

    res.json({message: "delete burger " , burgerid})
  }

} );

}) ;  



// skapar ett delete begäran där man kan ta bort drink i drink tabellen baserat på id
router.delete("/drink/:id", (req,res) => {

const drinkid = req.params.id;

const sql = 'DELETE FROM drink WHERE id = ?'

db.run(sql, drinkid , function(err)  {

  if(err) {
res.status(500).json({message:  "samething went wrong "  });

  } else if (this.changes === 0) {

   res.status(404).json({message: "drink is not found"    })
  } else {

    res.json({message: "delete drink " , drinkid})
  }

} );

}) ;  



// skapar ett delete begäran där man kan ta bort drink i drink tabellen baserat på id
router.delete("/dips/:id", (req,res) => {

const dipsid = req.params.id;

const sql = 'DELETE FROM dips WHERE id = ?'

db.run(sql, dipsid , function(err)  {

  if(err) {
res.status(500).json({message:  "samething went wrong "  });

  } else if (this.changes === 0) {

   res.status(404).json({message: "dip is not found"    })
  } else {

    res.json({message: "delete dip " , dipsid})
  }

} );

}) ;  










module.exports = router;