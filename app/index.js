const express     = require('express');
const bodyParser  = require('body-parser');
const morgan      = require('morgan');
const mongoose    = require('mongoose');

const jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens
const config = require('./lib/config'); // get our config file
const user   = require('./models/user'); // get our mongoose model

const authMiddleware = require('./middlewares/auth');

const userApiRoutes = require('./routes/user');
const authApiRoutes = require('./routes/user');

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

// API ROUTES -------------------

// get an instance of the router for api routes
const apiRoutes = express.Router();
authApiRoutes.config(apiRoutes);

// route middleware to verify a token
apiRoutes.use(authMiddleware);

// route to show a random message
apiRoutes.get('/', (req, res) => {
    res.json({ message: 'Welcome to the coolest API on earth!' });
});

userApiRoutes.config(apiRoutes);

// apply the routes to our application with the prefix /api
app.use('/api', apiRoutes);

console.log(`Magic happens at http://localhost:${port}`);