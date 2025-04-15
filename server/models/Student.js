const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: String,
  rollNumber: { type: String, unique: true },
  branch: String,
  cgpa: Number,
  email: String,
  appliedCompanies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Company' }],
});

module.exports = mongoose.model('Student', studentSchema);
