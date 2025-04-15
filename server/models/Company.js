const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  name: String,
  industry: String,
  eligibilityCriteria: {
    cgpa: Number,
    branches: [String],
  },
  interviewSlots: [
    {
      date: Date,
      available: Boolean,
    },
  ],
});

module.exports = mongoose.model('Company', companySchema);
