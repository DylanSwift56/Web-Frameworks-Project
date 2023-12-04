/* GET home page */

const mongoose = require('mongoose');
const timetables = mongoose.model('Timetables');



const login = function(req, res){
  res.render('login', { title: 'Login' });
};

const register = function(req, res){
  res.render('register', { title: 'Register' });
};

const index = function(req, res){
	res.render('index', { title: 'Bus Timetables',
	timetables: [{
	location: 'Tralee',
	bus_routes: ['Tralee to Listowel', 'Tralee to Killarney', 'Tralee to Cork'],
	next_bus: '13:00 to Listowel'
	},
	{
	location: 'Listowel',
	bus_routes: ['Listowel to Tralee', 'Listowel to Limerick', 'Listowel to Ballybunion'],
	next_bus: '12:00 to Limerick'
	},
	{
	location: 'Killarney',
	bus_routes: ['Killarney to Cork', 'Killarney to Waterford', 'Killarney to Tralee'],
	next_bus: '14:00 to Cork'
	}]});};


const timetablesCreate = function (req, res) {
	timetables.create({
		location: req.body.location,
		bus_routes: req.body.bus_routes.split(","),
		next_bus: req.body.next_bus
	}).then((err, timetable) => {
		if(err) {
			res
			.status(400)
			.json(err);
		}else{
			res
			.status(201)
			.json(timetable)
		}
		
	});
 };
 

 
 
const timetablesListByDistance = function (req, res) {
	res
	.status(200)
	.json({"status" : "success"});
 };
const timetablesReadOne = function (req, res) {
	if (req.params && req.params.timetableid && mongoose.Types.ObjectId.isValid(req.params.timetableid)){  
		timetables
		.findById(req.params.timetableid) 
		.then((timetable,err) => { 
			if (!timetable) {
			  res	
				.status(404) 
				.json({	
				  "message": "timetableid not found"
				});	 
			  return;
			} else if (err) {
			  res	
				.status(404) 
				.json(err); 
			  return; 	
			}
			res		
			  .status(200)
			  .json(timetable);
		  });
	  } else {		
		res		
		  .status(404) 	
		  .json({	
			"message": "No timetable in request"
	      });		
  }
};

 
 
const timetablesUpdateOne = function (req, res) {
	res
	.status(200)
	.json({"status" : "success"});
 };
const timetablesDeleteOne = function (req, res) {
	res
	.status(200)
	.json({"status" : "success"});
 };




module.exports = {
  index,
  login, 
  register,
  timetablesCreate,
  timetablesListByDistance,
  timetablesReadOne,
  timetablesUpdateOne,
  timetablesDeleteOne
 }