const express =require("express");

router = express.Router();

// ----------doctor routes------------//
router.use("/doctor",require("./doctor_route"));

// ------------patient routes----------//
router.use("/patient",require("./patient_route"));

// ----------report route---------//
router.post("/report/create/",require("../controller/report_controller").create);

router.get("/",(req,res)=>{
    return res.status(200).json({
        message : "Wellcome to miracle Hospital.."
    })
});



module.exports =router;
