const Report = require("../models/Report");
const asyncHandler = require("../middlewares/asyncHandler");
const ErrorResponse = require("../utils/errorResponse");

// @desc        create a new report
// @route       POST /api/patient/:id/create_report
// @access      private
exports.newReport = asyncHandler(async (req, res, next) => {
  const { status, info, createdBy } = req.body;

  console.log("params", req.params);
  let report = await Report.create({
    createdBy,
    patient_id: req.params.id,
    status,
    info
  });

  return res.status(200).json({
    success: true,
    data: report
  });
});

// @desc        get all reports
// @route       GET /api/patients/:id/all_reports
// @access      private
exports.getReport = asyncHandler(async (req, res, next) => {
  const reports = await Report.find({ patient_id: req.params.id });

  return res.status(200).json({
    success: true,
    count: reports.length,
    data: reports
  });
});
