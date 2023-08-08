const express =require("express");

const router =express.Router();
const report_controller = require("../controller/report_controller");

router.post("/create",report_controller.create);
router.get("/status/:status",report_controller.status);


module.exports =router;