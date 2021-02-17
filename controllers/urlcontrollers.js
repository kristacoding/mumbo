const db = require("../models");

// Defining methods for the urlController
module.exports = {
  findAll: function (req, res) {
    db.User.findById(req.param.id)
      .populate("WebsiteInfo")
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.WebsiteInfo.create(req.body)
      .then(({ _id }) => db.User.findOneAndUpdate({}, { $push: { WebsiteInfo: _id } }, { new: true }))
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.WebsiteInfo
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  register: function (req, res){
    db.User
      console.log(req.body)
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
};