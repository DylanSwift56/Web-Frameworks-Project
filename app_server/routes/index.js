const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const ctrlMain = require('../controllers/main');
const Register = require('../models/registrations');
const passport = require('passport');
const registrations = mongoose.model('Registration');

/* GET home page. */
router.get('/', ctrlMain.index);
router.get('/login', ctrlMain.login);
router.get('/register', ctrlMain.register);
router.get('/about', ctrlMain.about);

router.post('/register', (req, res, next) => {
	registrations.register(new registrations({
    username: req.body.username,
    firstName: req.body.firstName,
    lastName: req.body.lastName
  }), req.body.password, (err, user) => {
    if (err) {
      res.status(400).json({ error: err.message });
	  console.log(err.message);
	  return;
    } else {
      // Authenticate the user after registration (optional)
      passport.authenticate('local')(req, res, () => {
        res.status(201).json({ success: 'Registration successful', user });
		return;
      });
    }
  });
    
});

 


module.exports = router;
