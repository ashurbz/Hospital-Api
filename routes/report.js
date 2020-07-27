const express = require("express");
const router = express.Router();
const { getAllReport } = require("../controller/report");

router.get("/:status", getAllReport);

module.exports = router;
