// all routes for authentication
const express = require("express");
const router = express.Router();
const { login, register, patientRegister } = require("../controller/auth");

router.post("/register", register);
router.post("/login", login);
router.post("/register_patient", patientRegister);

module.exports = router;
