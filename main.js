// gör så jag kan använda express
const express = require("express");
// gör så jag kan använda body-parser
const bodyParser = require("body-parser");
// gör så jag kan använda dotenv
require("dotenv").config();
// gör så mina routes i catalogen authRoutes funkar
const authRoutes = require(".routes/authRoutes")
/*skapar app med express */
const app = express()
// skappar port från env fil eller 3000
const port = process.env.PORT || 3000
/*gör så express kan användra bodyparser*/
app.use(bodyParser.json())

// använda min routes
app.use("/api", authRoutes)

// starta appen på en port
app.listen(port,() => {

     

    console.log(`App started on port:${port}`);
} )
