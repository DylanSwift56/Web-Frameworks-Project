//Database Connection
const mongoose = require('mongoose');


const registrationSchema = new mongoose.Schema({
	firstName : {
		type: String,
		required: true
	},
	lastName : {
		type: String,
		required: true
	},
	email : {
		type: String,
		required: true
	},
	password : {
		type: String,
		required: true
	}
	});

mongoose.model('registration', registrationSchema);