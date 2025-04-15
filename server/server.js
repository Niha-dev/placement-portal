const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

const studentRoutes = require('./routes/studentRoutes');
const companyRoutes = require('./routes/companyRoutes');

dotenv.config();  // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON requests
app.use(express.json());
app.use(cors());  // Allow cross-origin requests
app.use('/api/students', studentRoutes);
app.use('/api/companies', companyRoutes);

// Connect to MongoDB using Mongoose
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('Failed to connect to MongoDB', err));

// Placeholder for routes (we'll define routes in the next steps)
app.get('/', (req, res) => {
  res.send('Hello from the Placement Portal Backend!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
