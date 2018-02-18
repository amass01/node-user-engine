const userController = require('../controllers/user');

const config = (apiRoutes) => {

    // Create new user
    apiRoutes.post('/user/create', userController.createUser);

    // Return all users
    apiRoutes.get('/user', userController.getAll);
};

module.exports = {
    config,
};