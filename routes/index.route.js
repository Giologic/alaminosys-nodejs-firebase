const express = require('express');
const router = express.Router();
const { isAuthenticated } = require('../config/auth');


// Welcome Page
router.get('/', (req, res) => {
  res.render('projects');
});


module.exports = router;