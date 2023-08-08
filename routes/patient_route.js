const express =require("express");

const router =express.Router();
const patient_controller = require("../controller/patient_controller");

router.post("/registation",patient_controller.registation);


module.exports =router;