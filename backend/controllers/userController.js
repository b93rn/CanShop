const User = require('../data/user');

// Handle index actions.
exports.index = function (req, res) {
  User.findAll().then(users => {
    res.json({
      status: "Success",
      message: "Users retrieved succesfully",
      data: users
    })
  }).catch(err => {
    res.json({
      status: "Error",
      message: err
    })
  });
}

  // Handle create user actions.
  exports.new = function (req, res) {
    User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      credit: req.body.credit !== undefined ? req.body.canCount : 0.00,
      canCount: 0
    }).then(user => {
      console.log(user)
      res.json({
        message: "New user created",
        data: user
      })
    }).catch(err => {
      res.json(err);
    });
  }

  //  Handle get b.id. 
  exports.view = function (req, res) {
    User.findAll({
      where: {
      id: req.params.user.id
      }
    }).then(user => {
      res.json({
        message: "User details loading...",
        data: user
      })
    }).catch(err => {
      res.json({
        status: "Error",
        message: err
      })
    });
  }

    // Hand put request. 
    exports.update = function (req, res) {
      User.update({
          firstName: req.body.firstName !== undefined ? req.body.firstName : User.firstName,
          lastName: req.body.lastName !== undefined ? req.body.lastName : User.lastName,
          credit: req.body.credit !== undefined ? req.body.credit : User.credit,
          canCount: req.body.canCount !== undefined ? req.body.canCount : User.canCount
        }, {
          where: {
          id: req.params.user.id
          }
        }
      ).then(user => {
        res.json({
          message: "User details updating...",
          data: user
        })
      }).catch(err => {
        res.json({
          status: "Error updating user.",
          message: err
        })
      });
    }

// Handle user delete
exports.delete = function (req, res) {
  User.destroy({where: {
  id: req.params.user.id
  }}).then(user => {
    res.json({
      status: "Success",
      message: "User has been deleted.",
      success: true
    });
  }).catch(err => {
    res.send(err);
  });
}