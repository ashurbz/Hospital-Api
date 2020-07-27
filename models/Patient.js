const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  phoneNo: {
    type: Number,
    required: true,
    unique: true,
    minlength: 10,
  },
});

const Patient = mongoose.model("patient", patientSchema);
module.exports = Patient;
