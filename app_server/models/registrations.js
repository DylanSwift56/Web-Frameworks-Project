//Database Connection
const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');


const registrationSchema = new mongoose.Schema({
	firstName : {
		type: String,
		required: true
	},
	lastName : {
		type: String,
		required: true
	},
	username : {
		type: String,
	},
	password : {
		type: String,
	}
	});
	
registrationSchema.plugin(passportLocalMongoose);

const Registration = mongoose.model('Registration', registrationSchema);

module.exports = Registration;