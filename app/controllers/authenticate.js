const user = require('../models/user');

const authenticate = function(req, res) {

    // find the user
    user.findOne({
        name: req.body.name
    }, (err, user) => {

        if (err) throw err;

        if (!user) {
            res.json({
                success: false,
                message: 'Authentication failed. User not found.',
            });
        } else if (user) {

            // check if password matches
            if (user.password !== req.body.password) {
                res.json({
                    success: false,
                    message: 'Authentication failed. Wrong password.',
                });
            } else {

                // if user is found and password is right
                // create a token with only our given payload
                // we don't want to pass in the entire user since that has the password
                const payload = {
                    admin: user.admin
                };
                const token = jwt.sign(payload, app.get('superSecret'), {
                    expiresIn: 1440 // expires in 24 hours
                });

                // return the information including token as JSON
                res.json({
                    success: true,
                    token: token
                });
            }

        }

    });
};

module.exports = {
    authenticate,
};