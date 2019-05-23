const express = require('express');
const router = express.Router();
const { isAuthenticated } = require('../config/auth');


// View List Wallets Page
router.get('/', (req, res) => {
  res.render('wallets', {
    page: 'wallet_list',
  });
});

// View Create Project Page
router.get('/details', (req, res) => {
  res.render('wallets', {
    page: 'wallet_details',
  });
});

module.exports = router;