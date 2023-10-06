/* GET home page */
const index = function(req, res){
  res.render('index', { title: 'Home Page' });
};
//registration page
const registration = function(req, res){
  res.render('registration', { title: 'Registration' });
};

module.exports = {
  index,
  registration
};