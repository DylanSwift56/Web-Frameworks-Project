//Database Connection
const mongoose = require('mongoose');

const timetablesSchema = new mongoose.Schema({
	location: {type: String,
			   required: true	
			},
	bus_routes: [String],
	next_bus: String
	});
	


mongoose.model('Timetables', timetablesSchema);
