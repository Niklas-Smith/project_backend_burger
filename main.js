// gör så jag kan använda express
const express = require("express");
// gör så jag kan använda body-parser
const bodyParser = require("body-parser");
// gör så jag kan använda dotenv
require("dotenv").config();
// gör så mina routes i filen authRoutes funkar
const authRoutes = require("./routes/authRoutes.js")
const postroutes = require("./routes/post.js")
const getroutes = require("./routes/get.js")
const putroutes = require("./routes/put.js")
// gör så jag kan använda jsonwebtoken
const jwt = require("jsonwebtoken")
/*skapar app med express */
const app = express()
// gör så jag kan använda sqlite3 
const sqlite3 = require("sqlite3").verbose()
// skappar port från env fil eller 3000
const port = process.env.PORT || 3000
/*gör så express kan användra bodyparser*/
app.use(bodyParser.json())

// skapar databasen och connect.
const db = new sqlite3.Database(process.env.DATABASE);
// använda min routes
app.use("/api", authRoutes)
app.use("/api", postroutes)
app.use("/api", getroutes)
app.use("/api", putroutes)

app.get("/api/hidden", authenticateToken, (req,res)=>{

    res.json({message:"tess hidden"})
})


// function som skapar så jag kan använda token för min routes (authenticateToken).
function authenticateToken(req,res,next) {
const authHeader = req.headers["authorization"];
const token = authHeader && authHeader.split(" ")[1]
if(token== null)
res.status(401).json({message: "you dont have acces to this route - you need token"})

jwt.verify(token, process.env.JWT_SECRET_KEY, (err, email) =>{
if(err) return res.status(403).json({message: "you have wrong JWT"})


  req.email = email
  next();
})


}
  











// starta appen på en port
app.listen(port,() => {

     

    console.log(`App started on port:${port}`);
} )


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

*/



  /*
// skapar ett post begäran där man kan lägga in ny hamburgare i tablelen burgers om du har authenticateToken.
app.post("/api/burgers", async(req, res) => {
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
/*
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

*/