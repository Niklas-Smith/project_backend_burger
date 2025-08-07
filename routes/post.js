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






// skapar ett post begäran där man kan lägga in ny hamburgare i tablelen burgers om du har authenticateToken.
router.post("/burgers", async(req, res) => {
  try {
       let {burgername, weightprotein,accessoriesone,accessoriestwo,priceone,pricetwo} = req.body;
 
    if(!burgername || !weightprotein|| !accessoriesone|| !accessoriestwo|| !priceone|| !pricetwo) {
       // skapar structur för error.
      let error = {
   message:"",
  detail : "",
  http_response: {

  }
};
 // hur error skirvs ut om något blir fel.
  error.message = "burgername, weightprotein, accessoriesone.accessoriestwo,priceone and pricetwo is not included"
  error.detail = "you need to input burgername, weightprotein, accessoriesone.accessoriestwo,priceone and pricetwo in JSON"
  error.http_response.message = "bad request"
   error.http_response.code = 400;

         return res.status(400).json(error)

    }
/*kollar om burger finns (gör senare)   */


 // sql som gör att man kan lägga till burgername, weightprotein,accessoriesone,accessoriestwo,priceone och pricetwo i tabelen burgers.
const sql = `INSERT INTO burgers(burgername,weightprotein,accessoriesone,accessoriestwo,priceone,pricetwo)VALUES(?,?,?,?,?,?)`;
db.run(sql, [burgername, weightprotein,accessoriesone,accessoriestwo,priceone,pricetwo], (err) => {
if(err){
res.status(400).json({Message: "Error when input new burger"})

}else{

 res.status(201).json({Message: "New burger created"})
}

});

    
  } catch (error){
        res.status(500).json( {error : "samething Went wrong....."}  )

        
  }

});



// skapar ett post begäran där man kan lägga in ny tillbehör i tablelen accessories om du har authenticateToken.
router.post("/accessories", async(req, res) => {
  try {
       let {accessoriesname, accessoriesprice,accessoriescontent} = req.body;
 
    if(!accessoriesname || ! accessoriesprice|| !accessoriescontent) {
       // skapar structur för error.
      let error = {
   message:"",
  detail : "",
  http_response: {

  }
};
 // hur error skirvs ut om något blir fel.
  error.message = "accessoriesname, accessoriesprice, and accessoriescontent is not included"
  error.detail = "you need to input accessoriesname, accessoriesprice, and accessoriescontent in JSON"
  error.http_response.message = "bad request"
   error.http_response.code = 400;

         return res.status(400).json(error)

    }
/*kollar om användare finns (gör senare)   */


 // sql som gör att man kan lägga till accessoriesname, accessoriesprice, och accessoriescontent i tabelen accessories.
const sql = `INSERT INTO accessories(accessoriesname, accessoriesprice,accessoriescontent)VALUES(?,?,?)`;
db.run(sql, [accessoriesname, accessoriesprice,accessoriescontent], (err) => {
if(err){
res.status(400).json({Message: "Error when input new accessories"})

}else{

 res.status(201).json({Message: "New accessories created"})
}

});

    
  } catch (error){
        res.status(500).json( {error : "samething Went wrong....."}  )

        
  }

});


// skapar ett post begäran där man kan lägga in ny dipar i tablelen dips om du har authenticateToken.
router.post("/dips", async(req, res) => {
  try {
       let {dipsname, dipsprice,dipscontent} = req.body;
 
    if(!dipsname || ! dipsprice|| !dipscontent) {
       // skapar structur för error.
      let error = {
   message:"",
  detail : "",
  http_response: {

  }
};
 // hur error skirvs ut om något blir fel.
  error.message = "dipsname, dipsprice, and dipscontent is not included"
  error.detail = "you need to input dipsname, dipsprice, and dipscontent in JSON"
  error.http_response.message = "bad request"
   error.http_response.code = 400;

         return res.status(400).json(error)

    }
/*kollar om användare finns (gör senare)   */


 // sql som gör att man kan lägga till dipsname, dipsprice, och dipscontent i tabelen dips.
const sql = `INSERT INTO dips(dipsname, dipsprice,dipscontent)VALUES(?,?,?)`;
db.run(sql, [dipsname, dipsprice,dipscontent], (err) => {
if(err){
res.status(400).json({Message: "Error when input new dip"})

}else{

 res.status(201).json({Message: "New dip created"})
}

});

    
  } catch (error){
        res.status(500).json( {error : "samething Went wrong....."}  )

        
  }

});


// skapar ett post begäran där man kan lägga in ny dricka i tablelen drink om du har authenticateToken.
router.post("/drink", async(req, res) => {
  try {
       let {drinkname, drinkprice} = req.body;
 
    if(!drinkname || ! drinkprice) {
       // skapar structur för error.
      let error = {
   message:"",
  detail : "",
  http_response: {

  }
};
 // hur error skirvs ut om något blir fel.
  error.message = "drinkname and drinkprice is not included"
  error.detail = "you need to input drinkname and drinkprice in JSON"
  error.http_response.message = "bad request"
   error.http_response.code = 400;

         return res.status(400).json(error)

    }
/*kollar om användare finns (gör senare)   */


 // sql som gör att man kan lägga till drinkname och drinkprice i tabelen drink.
const sql = `INSERT INTO drink(drinkname, drinkprice)VALUES(?,?)`;
db.run(sql, [drinkname, drinkprice], (err) => {
if(err){
res.status(400).json({Message: "Error when input new drink"})

}else{

 res.status(201).json({Message: "New drink created"})
}

});

    
  } catch (error){
        res.status(500).json( {error : "samething Went wrong....."}  )

        
  }

});

// skapar ett post begäran där man kan lägga in ny övrigt i tablelen other om du har authenticateToken.
router.post("/other", async(req, res) => {
  try {
       let {othername, otherprice} = req.body;
 
    if(!othername || ! otherprice) {
       // skapar structur för error.
      let error = {
   message:"",
  detail : "",
  http_response: {

  }
};
 // hur error skirvs ut om något blir fel.
  error.message = "othername and otherprice is not included"
  error.detail = "you need to input othername and otherprice in JSON"
  error.http_response.message = "bad request"
   error.http_response.code = 400;

         return res.status(400).json(error)

    }
/*kollar om användare finns (gör senare)   */


 // sql som gör att man kan lägga till othername och otherprice i tabelen other.
const sql = `INSERT INTO other(othername, otherprice)VALUES(?,?)`;
db.run(sql, [othername, otherprice], (err) => {
if(err){
res.status(400).json({Message: "Error when input new other"})

}else{

 res.status(201).json({Message: "New other created"})
}

});

    
  } catch (error){
        res.status(500).json( {error : "samething Went wrong....."}  )

        
  }

});




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