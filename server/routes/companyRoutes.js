const express = require('express');
const Company = require('../models/Company');

const router = express.Router();

// Get all companies
router.get('/', async (req, res) => {
  try {
    const companies = await Company.find();
    res.json(companies);
  } catch (err) {
    res.status(500).send('Error fetching companies');
  }
});

// Add a new company (for CDC to add companies)
router.post('/add', async (req, res) => {
  const { name, industry, eligibilityCriteria, interviewSlots } = req.body;
  try {
    const company = new Company({ name, industry, eligibilityCriteria, interviewSlots });
    await company.save();
    res.status(201).json(company);
  } catch (err) {
    res.status(500).send('Error adding company');
  }
});

module.exports = router;
