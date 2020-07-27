const Report = require("../models/Report");
const asyncHandler = require("../middlewares/asyncHandler");
const ErrorResponse = require("../utils/errorResponse");

// @desc         list all the reports of all patients
// @route       POST /api/reports/:status
// @access      private
exports.getAllReport = asyncHandler(async (req, res, next) => {
  let reports = await Report.find({
    status: req.params.status
  })
    .sort("date:1")
    .populate("patient_id");

  return res.status(200).json({
    success: true,
    data: reports
  });
});
