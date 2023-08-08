const express =require("express");

const router =express.Router();
const doctor_controller = require("../controller/doctor_controller");

router.post("/registation",doctor_controller.registation);


module.exports =router;