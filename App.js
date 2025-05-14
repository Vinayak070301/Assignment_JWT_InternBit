// Import required modules
const path = require('path'); // Built-in Node.js module for handling file paths
const express = require('express'); // Web framework for building APIs
const app = express(); // Initialize an Express application
const mongoose = require('mongoose'); // MongoDB ODM for Node.js
require('dotenv').config(); // Load environment variables from a .env file
const router = require('./Routes/UserRoutes'); // Router for handling task-related endpoints

// Define the port for the server
const port = 4444;

// Middleware for parsing JSON data in requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Middleware for serving static files (e.g., HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Use the task router for any route starting with '/api'
app.use('/api', router);

// Connect to MongoDB database
mongoose.connect('mongodb://127.0.0.1:27017/User')
   .then(() => {
        // Start the server after a successful database connection
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    })
   .catch(error => {
        // Log any error that occurs during the database connection
        console.error(error);
    });
