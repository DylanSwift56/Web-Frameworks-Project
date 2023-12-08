const express = require('express');
const passport = require('passport');
const router = express.Router();
const ctrlMain = require('../controllers/main');
const Registration = require('../models/registrations');

router
	.route('/timetables')
	.get(ctrlMain.timetablesReadAll)
	.post(ctrlMain.timetablesCreate);
	
router
	.route('/timetables/:timetableid')
	.get(ctrlMain.timetablesReadOne)
	.put(ctrlMain.timetablesUpdateOne)
	.delete(ctrlMain.timetablesDeleteOne);
	
router.route('/register').get(ctrlMain.timetablesReadAll).post(ctrlMain.createUser);
	
/*router.post('/register', (req, res, next) => {
    const { firstName, lastName, email, password } = req.body;

    // Create a new Account instance with the provided data
    const newUser = new Registration({ firstName, lastName, email });

    // Use Passport's register method provided by passport-local-mongoose
    Registration.register(newUser, password, (err, account) => {
        if (err) {
            return res.render('register', { error: err.message });
        }

        // If registration is successful, authenticate the user and redirect
        passport.authenticate('local')(req, res, () => {
            req.session.save((err) => {
                if (err) {
                    return next(err);
                }
                res.redirect('localhost:3000/');
            });
        });
    });
});*/

module.exports = router;
