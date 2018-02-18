const authenticateController = require('../controllers/authenticate');

const config = (apiRoutes) => {
    apiRoutes.post('/authenticate', authenticateController.authenticate);
};

module.exports = {
    config,
};

