/* GET home page */
const index = function(req, res){
  res.render('index', { title: 'Home Page' });
};
//registration page
const registration = function(req, res){
  res.render('registration', { title: 'Registration' });
};

const mainpage = function(req, res){
  res.render('mainpage', { title: 'Main Page' });
};

module.exports = {
  index,
  registration,
  mainpage
};