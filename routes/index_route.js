const express =require("express");

router = express.Router();

router.use("/doctor",require("./doctor_route"));

router.get("/",(req,res)=>{
    return res.status(200).json({
        message : "Wellcome to miracle Hospital.."
    })
});



module.exports =router;
