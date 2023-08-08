const mongoose =require("mongoose");
const env =require("./enviroment");


(async function(){
    try{
        await mongoose.connect(env.db);
        console.log("data base successfully connected..");

    }catch(err){
        console.log(err);
    }
})()