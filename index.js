const express     = require('express');
const bodyParser  = require('body-parser');
const morgan      = require('morgan');
const mongoose    = require('mongoose');

const jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens
const config = require('./app/lib/config'); // get our config file
const user   = require('./app/models/user'); // get our mongoose model

// initiate express
const app         = express();
const port = process.env.PORT || 9191;

mongoose.connect(config.database); // connect to database
app.set('superSecret', config.secret); // secret variable

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({
    extended: false,
}));
app.use(bodyParser.json());

// use morgan to log requests to the console
app.use(morgan('dev'));

//start the server
app.listen(port);

// basic route
app.get('/', (req, res) => {
    res.send(`Hello! The API is at http://localhost:'${port}/api`);
});


console.log(`Magic happens at http://localhost:${port}`);