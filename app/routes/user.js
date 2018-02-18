const userController = require('../controllers/user');

const config = (apiRoutes) => {

    // Create new user
    apiRoutes.post('/users/create', userController.createUser);

    // route to return all users
    apiRoutes.get('/users', userController.getAll);
};

module.exports = {
    config,
};