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







// skapar ett put begäran där man kan uppdatera extra i tabelen other baserat på id.
router.put("/other/:id", (req,res) => {
const otherid = req.params.id;

// gör and othername och otherprice ta värden från req.body .
 let {othername, otherprice} = req.body;

 // skapar ett object med värde för other.
let other = {
 othername : othername,
 otherprice : otherprice
}

if(!othername||!otherprice) {
return res.status(400).json({message: "You need to input othername and otherprice" });

}
 // sql som gör att man kan uppdatera othername och otherprice i tabelen other.
const sql = `UPDATE other SET othername = ?, otherprice = ? WHERE id = ?`;
db.run(sql, [othername, otherprice,otherid], function(err)  {

  if(err) {
res.status(500).json({message:  "samething went wrong "  });

  } else if (this.changes === 0) {

   res.status(404).json({message: "other is not found"    })
  } else {

    res.json({message: "update other " , other})
  }

} );

}) ;  


// skapar ett put begäran där man kan uppdatera tillbehör i tabelen accessories baserat på id.
router.put("/accessories/:id", (req,res) => {
const accessorieid = req.params.id;

// gör and accessoriesname,accessoriesprice och accessoriescontent ta värden från req.body .
 let {accessoriesname, accessoriesprice,accessoriescontent} = req.body;

 // skapar ett object med värde för accessorie.
let accessorie = {
 accessoriesname : accessoriesname,
 accessoriesprice : accessoriesprice,
 accessoriescontent: accessoriescontent
}

if(!accessoriesname||!accessoriesprice||!accessoriescontent) {
return res.status(400).json({message: "You need to input accessoriesname,accessoriesprice and accessoriescontent" });

}
 // sql som gör att man kan uppdatera accessoriesname,accessoriesprice och accessoriescontent i tabelen accessories.
const sql = `UPDATE accessories SET accessoriesname = ?, accessoriesprice = ?,accessoriescontent= ? WHERE id = ?`;
db.run(sql, [accessoriesname, accessoriesprice,accessoriescontent,accessorieid], function(err)  {

  if(err) {
res.status(500).json({message:  "samething went wrong "  });

  } else if (this.changes === 0) {

   res.status(404).json({message: "accessories is not found"    })
  } else {

    res.json({message: "update accessories " , accessorie})
  }

} );

}) ;  


// skapar ett put begäran där man kan uppdatera dipa i tabelen dips baserat på id.
router.put("/dips/:id", (req,res) => {
const dipid = req.params.id;

// gör and dipsname,dipsprice och dipscontent ta värden från req.body .
 let {dipsname, dipsprice,dipscontent} = req.body;

 // skapar ett object med värde för accessorie.
let dip = {
 dipsname : dipsname,
 dipsprice : dipsprice,
 dipscontent: dipscontent
}

if(!dipsname||!dipsprice||!dipscontent) {
return res.status(400).json({message: "You need to input dipsname,dipsprice and dipscontent" });

}
 // sql som gör att man kan uppdatera dipsname,dipsprice och dipscontent i tabelen dips.
const sql = `UPDATE dips SET dipsname = ?, dipsprice = ?,dipscontent= ? WHERE id = ?`;
db.run(sql, [dipsname, dipsprice,dipscontent,dipid], function(err)  {

  if(err) {
res.status(500).json({message:  "samething went wrong "  });

  } else if (this.changes === 0) {

   res.status(404).json({message: "dips is not found"    })
  } else {

    res.json({message: "update dips " , dip})
  }

} );

}) ;  



// skapar ett put begäran där man kan uppdatera extra i tabelen other baserat på id.
router.put("/drink/:id", (req,res) => {
const drinkid = req.params.id;

// gör and drinkname och drinkprice ta värden från req.body .
 let {drinkname, drinkprice} = req.body;

 // skapar ett object med värde för other.
let drink = {
 drinkname : drinkname,
 drinkprice : drinkprice
}

if(!drinkname||!drinkprice) {
return res.status(400).json({message: "You need to input drinkname and drinkprice" });

}
 // sql som gör att man kan uppdatera drinkname och drinkprice i tabelen drink.
const sql = `UPDATE drink SET drinkname = ?, drinkprice = ? WHERE id = ?`;
db.run(sql, [drinkname, drinkprice,drinkid], function(err)  {

  if(err) {
res.status(500).json({message:  "samething went wrong "  });

  } else if (this.changes === 0) {

   res.status(404).json({message: "drink is not found"    })
  } else {

    res.json({message: "update drink " , drink})
  }

} );

}) ;  


// skapar ett put begäran där man kan uppdatera burger i tabelen burgers baserat på id.
router.put("/burgers/:id", (req,res) => {
const burgerid = req.params.id;

// gör and burgername,weightprotein,accessoriesone,accessoriestwo,priceone och pricetwo ta värden från req.body .
 let {burgername, weightprotein,accessoriesone,accessoriestwo,priceone,pricetwo} = req.body;

 // skapar ett object med värde för accessorie.
let burger = {
 burgername : burgername,
 weightprotein : weightprotein,
 accessoriesone: accessoriesone,
 accessoriestwo:accessoriestwo,
 priceone:priceone,
 pricetwo:pricetwo
}

if(!burgername||!weightprotein||!accessoriesone||!accessoriestwo||!priceone||!pricetwo) {
return res.status(400).json({message: "You need to input burgername,weightprotein,accessoriesone,accessoriestwo,priceone and pricetwo" });

}
 // sql som gör att man kan uppdatera burgername,weightprotein,accessoriesone,accessoriestwo,priceone och pricetwo i tabelen burgers.
const sql = `UPDATE burgers SET burgername = ?, weightprotein = ?,accessoriesone= ?, accessoriestwo= ?, priceone= ?, pricetwo= ? WHERE id = ?`;
db.run(sql, [burgername, weightprotein,accessoriesone,accessoriestwo,priceone,pricetwo,burgerid], function(err)  {

  if(err) {
res.status(500).json({message:  "samething went wrong "  });

  } else if (this.changes === 0) {

   res.status(404).json({message: "burger is not found"    })
  } else {

    res.json({message: "update burger " , burger})
  }

} );

}) ;  







module.exports = router;






/*
{
"burgername" : "teset",
"weightprotein" : 200 , 
"accessoriesone" : "ost" , 
"accessoriestwo" : "becon" , 
"priceone": 70 ,
"pricetwo" : 120
}  

{
"accessoriesname" : "teset",
"accessoriesprice" : 200 , 
"accessoriescontent" : "ost test" 

}  
{
"dipsname" : "teset",
"dipsprice" : 200 , 
"dipscontent" : "ost test" 

}  

{
"drinkname" : "teset",
"drinkprice" : 25 
}  

{
"othername" : "teset",
"otherprice" : 25 
}  

*/