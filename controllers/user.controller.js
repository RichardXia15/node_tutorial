
const User = require('../models/user.model');

exports.test = function(req, res) {
    res.send('We have reached the test controller');
};

exports.user_create = function (req, res) {
    let user = new User({
        gender: req.body.gender,
        name: { 
            title: req.body.name.title,
            first: req.body.name.first,
            last: req.body.name.last
        },
        email: req.body.email,
        registered: {
            date: req.body.registered.date,
            age: req.body.registered.age
        },
        picture: req.body.picture
    });

    user.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('User created successfully');
    })
};

exports.user_details = function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) return next(err);
        res.send(user);
    })
};

exports.user_update = function (req, res) {
    User.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, user) {
        if (err) return next(err);
        res.send('User ' + user.id + ' udpated.');
    });
};

exports.user_delete = function (req, res) {
    User.findOneAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('User deleted.'); 
    });
};