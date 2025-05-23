const express = require('express');
const router = express.Router();

// Sample page 1
router.get('/page1', (req, res) => {
  res.json({ 
    message: 'Welcome to Page 1',
    user: req.session.user
  });
});

// Sample page 2
router.get('/page2', (req, res) => {
  res.json({ 
    message: 'Welcome to Page 2',
    user: req.session.user
  });
});

// Catalog page with owner information
router.get('/catalog', (req, res) => {
  const catalogItems = [
    {
      id: 1,
      name: 'Item 1',
      owner: {
        displayName: 'bob.jammy',
        email: 'thotatarun96@gmail.com'
      }
    },
    {
      id: 2,
      name: 'Item 2',
      owner: {
        displayName: 'alice.smith',
        email: 'alice.smith@capgemini.com'
      }
    }
  ];
  
  res.json({ 
    items: catalogItems,
    user: req.session.user
  });
});

// Check session status
router.get('/check-session', (req, res) => {
  res.json({
    authenticated: req.session.authenticated,
    user: req.session.user,
    sessionExpiry: req.session.cookie.maxAge
  });
});

module.exports = router; 