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

// skapar ett post begäran där man kan register sig i tablen users_accunts .
router.post("/register", async(req, res) => {
  try {
       let {email, password, username} = req.body;
 
    if( !email || !password || !username) {
         return res.status(400).json({error: "must have email, password and username" })

    }
/*kollar om användare finns (gör senare)   */

// skapar ett skyddat lösenord som använder bcrypt.
const hashedPassword = await bcrypt.hash(req.body.password, 10);

 // sql som gör att man kan lägga till hashedPassword, username  i tabelen users_accunts.
const sql = `INSERT INTO users(email,username, password)VALUES(?,?,?)`;
db.run(sql, [email,username, hashedPassword], (err) => {
if(err){
res.status(400).json({Message: "Error when created user"})

}else{

 res.status(201).json({Message: "New user Reqister"})
}

});

    
  } catch (error){
        res.status(500).json( {error : "samething Went wrong....."}  )
    
  }

});




// skapar ett post begäran där man kan loga in sig med om man använder som information som finna lagrad när man register sig .
router.post("/login" , async(req, res)=> {

  try {
       let {email, password} = req.body;
 
       
    if(!email || !password) {
         return res.status(400).json({error: "must have both password and email" })

    }
 // sql som gör att can logga in sig om information match vad som finns i tablen users_accunts.
    const sql = `SELECT * FROM users WHERE email =? ` ;
    db.get(sql, [email], async(err, row) => {
    if(err) {
             res.status(400).json({error: "Error with authenticator"})
       
    } else if(!row){
 res.status(401).json({error: "wrong password or email"})
 } else {
        // se om ditt inskriva lösenord matcha det hased lösenord 
   const matchPassword = await bcrypt.compare(password, row.password);

if(!matchPassword) {

res.status(401).json({Message: "wrong password or email!"}) 
 
} else {
  // skapar en jwt token som vara 2 timmar
   const payload = {email: email};
   const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {expiresIn:"2h"})
   const response = {
 message: "you are login",
 token: token


   }
 res.status(200).json({response}) 

}
 }

    });
  } catch (error){
        res.status(500).json( {error : "samething Went wrong....."}  )

  }


})





module.exports = router;



/*  {
  "email" : "nikla_test@hotmail.se",
   "password" : "test1",
    "username" : "niklas"

  
}   */ 