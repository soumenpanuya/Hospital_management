const express =require("express");
const passport =require("../config/passport");

router = express.Router();



// ----------doctor routes------------//
const doctor_controller = require("../controller/doctor_controller");
router.post("/doctors/register",doctor_controller.registation);
router.post("/doctors/login",doctor_controller.login);


// ----------report route---------//
const report_controller = require("../controller/report_controller");
router.get("/reports/:status",passport.authenticate("jwt",{session :false}),report_controller.status);


// ------------patient routes----------//
const patient_controller = require("../controller/patient_controller");
router.post("/patients/register",patient_controller.registation);
router.post("/patients/:id/create_report",passport.authenticate("jwt",{session :false}),report_controller.create);
router.get("/patients/:id/all_reports",passport.authenticate("jwt",{session :false}),report_controller.allReport);









router.get("/",(req,res)=>{
    return res.status(200).json({
        message : "Wellcome to miracle Hospital.."
    })
});



module.exports =router;
