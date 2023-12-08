/* GET home page */

//app_Server

const request = require('request');

const apiOptions = { 
server :'http://localhost:3000' 
}; 
if (process.env.NODE_ENV === 'production') { 
server = 'https://web-frameworks-project-bslt.onrender.com'; 
}

const login = function(req, res){
  res.render('login', { title: 'Login' });
};

const register = function(req, res){
  res.render('register', { title: 'Register' });
};

const about = function(req, res){
	res.render('about', {title: 'about'});
};



 const _renderHomepage = function(req, res, responseBody){
	let message = null;
	let timetables = [];
	console.log(responseBody);
  if (!(responseBody instanceof Array)) {
	message = 'API lookup error';
	responseBody = [];
	
  } else {
	if (!responseBody.length) {
	  message = 'No places found nearby';
	}
	console.log(message);
  }
	res.render('index', {
	title: 'Find Bus Timetables Here!', 
	timetables: responseBody,
	message: message
});};




const index = function(req, res){ 
	const path = '/api/timetables';
	const requestOptions = {
		url : apiOptions.server + path,
		method : 'GET',
		json : {},
	};
	request(requestOptions, (err, response, body) => { 
		let data = body;
		if (err) { 
			console.log(err); 
			return;
		} else { 
			console.log(body); 
			for (let i = 0; i < 4; i++) {
				_renderHomepage(req, res, body); 
			}
		} 

		
		//_renderHomepage(req, res, body); 
	} 
);
};



module.exports = {
  index,
  login, 
  register,
  about
 }