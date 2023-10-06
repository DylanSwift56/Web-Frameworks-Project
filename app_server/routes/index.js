const express = require('express');
const router = express.Router();
const ctrlMain = require('../controllers/main');

/* GET home page. */
router.get('/', ctrlMain.index);
router.get('/registration', ctrlMain.registration);

module.exports = router;
