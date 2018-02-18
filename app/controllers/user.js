const user   = require('../models/user'); // get our mongoose model

const getAll = (req, res) => {
    user.find({}, (err, users) => {
        res.json(users);
    });
};

const createUser = (req, res) => {

    // create a sample user
    const newUser = new user({
        name: req.body.name,
        password: req.body.password,
        admin: req.body.isAdmin,
    });

    // save the sample user
    newUser.save((err) => {
        if (err) throw err;

        console.log('User saved successfully');
        res.json({ success: true });
    });
};

module.exports = {
    getAll,
    createUser,
};