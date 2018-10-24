const express = require('express');
const bodyParser = require('body-parser');

//setting up mongoose 
const mongoose = require('mongoose');
let dev_db_url = "mongodb://someuser:admin1234@ds237563.mlab.com:37563/test1";
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


// import the user routes
const user = require('./routes/user.route');

const app = express();

//body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// this sets up your route of <web_name>/users/<some_function>
app.use('/users',user)

let port = 1234;

app.listen(port, () =>  {
    console.log('server is up and running on port number: ' + port);
});