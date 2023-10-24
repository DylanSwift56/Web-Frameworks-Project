/* GET home page */


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






module.exports = {
  index,
  login, 
  register
 }