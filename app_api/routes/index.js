const express = require('express');
const router = express.Router();
const ctrlMain = require('../controllers/main');

/* GET home page. */
//router.get('/timetables', ctrlMain.index);
//router.get('/login', ctrlMain.login);
//router.get('/register', ctrlMain.register);

router
	.route('/timetables')
	.get(ctrlMain.timetablesListByDistance)
	.post(ctrlMain.timetablesCreate);
	
router
	.route('/timetables/:timetableid')
	.get(ctrlMain.timetablesReadOne)
	.put(ctrlMain.timetablesUpdateOne)
	.delete(ctrlMain.timetablesDeleteOne);

module.exports = router;
