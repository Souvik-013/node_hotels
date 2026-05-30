const mongoose = require('mongoose');

// Define the mongodb connection url
const mongoURL = 'mongodb://127.0.0.1:27017/hotels';

// Setup mongodb connection (Removed deprecated options)
mongoose.connect(mongoURL);

// Get default connection
const db = mongoose.connection;

db.on('connected', () => {
    console.log("Connected to MongoDB server");
});

db.on('error', (err) => {
    console.error("MongoDB connection error: ", err);
});

db.on('disconnected', () => {
    console.log("MongoDB server disconnected");
});

// Export the database connection
module.exports = db;