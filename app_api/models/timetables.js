//Database Connection
const mongoose = require('mongoose');

const timetablesSchema = new mongoose.Schema({
	location: {type: String,
			   required: true	
			},
	bus_routes: [String],
	next_bus: String
	});
	
const registrationSchema = new mongoose.Schema({
	firstName : {
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

mongoose.model('Timetables', timetablesSchema);
mongoose.model('Registration', registrationSchema);