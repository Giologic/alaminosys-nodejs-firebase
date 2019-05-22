'use strict';

// Import Libraries
// ==========================================
require('dotenv').config();

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

// Base Configuration
// ==========================================
const app = express();
app.use(logger('dev'));

// EJS
app.set('view engine', 'ejs');

// Static files configuration
app.use(express.static('public'));
app.set('public', __dirname + '/public/');

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Routes
app.use('/', require('./routes/index'));

// Listen
// ==========================================
const port = process.env.PORT || 8080
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
})