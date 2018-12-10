User = require('../models/userModel')

// Handle index actions.
exports.index = function (req, res) {
    User.get(function (err, users) {
        if (err) {
            res.json({
                status: "Error",
                message: err
            })
        } else {
            res.json({
                status: "Success",
                message: "Users retrieved succesfully",
                data: users
            })
        }
    })
}

// Handle create user actions.
exports.new = function (req, res) {
    var user = new User()
    // console.log(req.body)
    user.firstName = req.body.firstName
    user.lastName = req.body.lastName
    user.credit = req.body.credit ? req.body.credit : 0.00
    user.canCount = 0

    user.save(function (err) {
        if (err) {
            res.json(err)
        } else {
            res.json({
                message: "New user created",
                data: user
            })
        }
    })
}

//  Handle get by id.
exports.view = function (req, res) {
    User.findById(req.params.user_id, function (err, user) {
        if (err) {
            res.send(err)
        } else {
            res.json({
                message: "User details loading...",
                data: user
            })
        }
    })
}

// Hand put request.
exports.update = function (req, res) {
    User.findById(req.params.user_id, function (err, user) {
        if (err) {
            res.send(err)
        } else {
            user.firstName = req.body.firstName ? req.body.firstName : user.firstName
            user.lastName = req.body.lastName ? req.body.lastName : user.lastName
            user.credit = req.body.credit ? req.body.credit : user.credit
            user.canCount = req.body.canCount ? req.body.canCount : user.canCount

            // Save the user info.
            user.save(function (err) {
                if (err) {
                    res.json(err)
                } else {
                    res.json({
                        message: "User info updated",
                        data: user
                    })
                }
            })
        }
    })
}

// Handle user delete
exports.delete = function (req, res) {
    User.deleteOne({
        _id: req.params.user_id
    }, function (err, user) {
        if (err) {
            res.send(err)
        } else {
            res.json({
                status: "Success",
                message: "User has been deleted."
            })
        }
    })
}