const express = require("express");
const router = express.Router();
const doctorRouter = require("./doctor");
const reportRouter = require("./report");
const patientRouter = require("./patient");
const { authenticate } = require("../middlewares/auth");

router.use("/doctor", doctorRouter);
router.use("/patient", patientRouter);
router.use("/report", reportRouter);

module.exports = router;
