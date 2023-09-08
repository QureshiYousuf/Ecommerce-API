const mongoose = require('mongoose');

// connecting mongoose to its default server and ecommerceDB
mongoose.connect('mongodb+srv://yousuf337692qureshi:bH764IQfTC3MYtbK@cluster0.cvff5s1.mongodb.net/ecommerce-api?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

// mongodb+srv://soumyasri2245:Soumya22%4034@cluster0.u2ywt3o.mongodb.net/?retryWrites=true&w=majority

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));

db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});

module.exports = db;