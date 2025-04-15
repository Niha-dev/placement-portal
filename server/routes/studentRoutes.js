const express = require('express');
const Student = require('../models/Student');
const router = express.Router();

// Get all students
router.get('/', async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).send('Error fetching students');
  }
});

// Add a new student (for registration)
router.post('/register', async (req, res) => {
  const { name, rollNumber, branch, cgpa, email } = req.body;
  try {
    const student = new Student({ name, rollNumber, branch, cgpa, email });
    await student.save();
    res.status(201).json(student);
  } catch (err) {
    res.status(500).send('Error registering student');
  }
});

module.exports = router;
