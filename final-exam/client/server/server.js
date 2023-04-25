const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();

// Load environment variables from a .env file
dotenv.config();

// Create an instance of express
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(
    process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Connected to MongoDB database!');
});

// Define your routes
app.use('/api', require('./src/routes'));

// Start the server
const port = process.env.PORT || 5173;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});