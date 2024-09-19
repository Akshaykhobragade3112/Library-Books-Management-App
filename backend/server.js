const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const bookRoutes = require('./routes/bookRoutes');
const cors = require('cors');

// Load environment variables
dotenv.config();

// Initialize express app
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors()); // Handle cross-origin requests from frontend
app.use(express.json()); // Parse JSON body data

// Routes
app.use('/api/auth', authRoutes);   // User authentication routes
app.use('/api/books', bookRoutes);  // Book management routes

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
