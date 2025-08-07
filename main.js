// gör så jag kan använda express
const express = require("express");
// gör så jag kan använda body-parser
const bodyParser = require("body-parser");
// gör så jag kan använda dotenv
require("dotenv").config();
// gör så mina routes i catalogen authRoutes funkar
const authRoutes = require("./routes/authRoutes.js")
/*skapar app med express */
const app = express()
// skappar port från env fil eller 3000
const port = process.env.PORT || 3000
/*gör så express kan användra bodyparser*/
app.use(bodyParser.json())

// använda min routes
app.use("/api", authRoutes)

// function som skapar så jag kan kräva token för min routes (authenticateToken).
function authenticateToken(req,res,next) {
const authHeader = req.headers["authorization"];
const token = authHeader && authHeader.split(" ")[1]
if(token== null)
res.status(401).json({message: "you dont have acces to this route - you need token"})

jwt.verify(token, process.env.JWT_SECRET_KEY, (err, username) =>{
if(err) return res.status(403).json({message: "you have wrong JWT"})


  req.username = username
  next();
})


}

// starta appen på en port
app.listen(port,() => {

     

    console.log(`App started on port:${port}`);
} )
