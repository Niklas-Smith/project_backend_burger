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



// skapar ett put begäran där man kan uppdatera en övrigt i tablelen other om du har authenticateToken.
router.put("/other/:id", async(req, res) => {
  try {

    const otherid = req.params.id;
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


 // sql som gör att man kan uppdatera othername och otherprice i tabelen other.
const sql = `UPDATE other SET othername = ?, otherprice = ? WHERE id = ?`;
db.run(sql, [othername, otherprice,otherid], (err) => {
if(err){
res.status(400).json({Message: "Error when input updated other"})

} else{

 res.status(201).json({Message: "other is updated"})
}

});

    
  } catch (error){
        res.status(500).json( {error : "samething Went wrong....."}  )

        
  }

});







module.exports = router;