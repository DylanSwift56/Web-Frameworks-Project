/* GET home page */
const index = function(req, res){
  res.render('index', { title: 'Home Page' });
};

const login = function(req, res){
  res.render('login', { title: 'Login' });
};

const register = function(req, res){
  res.render('register', { title: 'Register' });
};


module.exports = {
  index,
  login, 
  register
 }