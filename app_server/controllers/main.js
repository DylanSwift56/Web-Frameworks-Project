/* GET home page */

//app_Server

const request = require('request');

const apiOptions = { 
server : 'http://localhost:3000' 
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
		qs : {
			lng : -0.9690884, 
			lat : 51.455041, 
			maxDistance : 20 

		}
	};
	request(requestOptions, (err, response, body) => { 
		let data = body;
		if (err) { 
			console.log(err); 
		} else if (response.statusCode === 200) { 
			console.log(body); 
		} 

		if (response.statusCode === 200 && data.length) {
			 for (let i = 0; i < data.length; i++) {
				_renderHomepage(req, res, data); 
			}
		}
		_renderHomepage(req, res, body); 
	} 
);
};



module.exports = {
  index,
  login, 
  register
 }