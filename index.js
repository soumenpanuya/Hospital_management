// --------------- secret key configuration-----------//
require("dotenv").config();
const env = require("./config/enviroment");

// ---------creating server----------//
const express =require("express");
const port =env.port || 1002
const app =express();

// --------data base configure----------//
const db = require("./config/mongoose");

// ----------setting parser-----------//
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// --------- routes------------//
app.use("/",require("./routes/index_route"));



app.listen(port,(err)=>{
    if(err){
        return console.log(err);
    }
    console.log(`Server running at port:${port}`);
})