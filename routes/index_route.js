const express =require("express");

router = express.Router();

// ----------doctor routes------------//
router.use("/doctor",require("./doctor_route"));

// ------------patient routes----------//
router.use("/patient",require("./patient_route"));

router.get("/",(req,res)=>{
    return res.status(200).json({
        message : "Wellcome to miracle Hospital.."
    })
});



module.exports =router;
