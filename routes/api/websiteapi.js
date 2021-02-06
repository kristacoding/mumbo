var mongoose = require('mongoose');
const router = require("express").Router();
const urlController = require("../../controllers/urlControllers");
const db = require("../../models")

/* GET ALL URLS */
router.get('/', function(req, res, next) {
  db.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* SAVE BOOK */
router.post('/', function(req, res, next) {
 db.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
