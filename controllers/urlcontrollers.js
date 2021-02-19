const { ExtractJwt } = require("passport-jwt");
const db = require("../models");

const getToken = function (headers) {
  if (headers && headers.authorization) {
    var parted = headers.authorization.split(' ');
    if (parted.length === 2) {
      return parted[1];
    } else {
      return null;
    }
  } else {
    return null;
  }
};


// Defining methods for the urlController
module.exports = {
  findAll: function (req, res) {
    const token = getToken(req.headers);
    console.log(token);
    if (token) {
    db.User.find(req.user)
      .populate("WebsiteInfo")
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
    } else {
      res.status(403).json({})
    }
  },
  findById: function (req, res) {
    db.WebsiteInfo
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.WebsiteInfo.create(req.body)
      .then(({ _id }) => db.User.findOneAndUpdate({}, { $push: { WebsiteInfo: _id } }, { new: true }))
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.WebsiteInfo
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.WebsiteInfo
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },


};