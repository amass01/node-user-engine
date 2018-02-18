const getAll = (req, res) => {
    user.find({}, (err, users) => {
        res.json(users);
    });
};

module.exports = {
    getAll,
};