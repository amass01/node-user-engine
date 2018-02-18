const userController = require('../controllers/user');

const config = (apiRoutes) => {
    // route to return all users (GET http://localhost:8080/api/users)
    apiRoutes.get('/users', userController.getAll);
};

module.exports = {
    config,
};