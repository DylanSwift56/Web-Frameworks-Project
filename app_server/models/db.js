//Database Connection
const mongoose = require('mongoose');
const dbURI = "mongodb+srv://user1:4mh_xxUxkxmc@cluster0.swerpv6.mongodb.net/BusTimetables?retryWrites=true&w=majority";
try {
   
mongoose.connect(
    dbURI,
    { useNewUrlParser: true, useUnifiedTopology: true }).then(
    () => {console.log(" Mongoose is connected")},
	err=> {console.log(err)}
	);
}
 catch (e) {
  console.log("could not connect");
}

require('./timetables');
require('./registrations');