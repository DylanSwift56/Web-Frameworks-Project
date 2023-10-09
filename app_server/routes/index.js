const express = require('express');
const router = express.Router();
const ctrlMain = require('../controllers/main');

/* GET home page. */
router.get('/', ctrlMain.index);
router.get('/registration', ctrlMain.registration);
router.get('/mainpage', ctrlMain.mainpage);

module.exports = router;
