var passport = require("../../config/passport");
var settings = require('../../config/settings');
var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();
var User = require("../../models/user");
var urlControllers = require("../../controllers/urlcontrollers");

//Matches with /api/auth
router
    .route("/")
    .post(urlControllers.register);

//Matches with /api/auth/register
router 
    .route("/register")
    .post(urlControllers.register);

//Matches with api/auth/login
router
    .route("/login")
    .post(passport.authenticate("local"), 
    (req, res) => res.json(req.user));

router
    .route("/logout")
    .post((req,res) => {
        req.logout();
        res.json({});
    });


// router.post('/register', function (req, res) {
//     console.log(req.body)
//     if (!req.body.username || !req.body.password) {
//         res.json({ success: false, msg: 'Please pass username and password.' });
//     } else {
//         var newUser = new User({
//             username: req.body.username,
//             password: req.body.password
//         });
//         // save the user
//         newUser.save(function (err) {
//             if (err) {
//                 console.log(err)
//                 return res.json({ success: false, msg: 'Username already exists.' });
//             }
//             res.json({ success: true, msg: 'Successful created new user.' });
//         });
//     }
// });

// router.post('/login', function (req, res) {
//     console.log(req.body.username)
//     User.findOne({
//         username: req.body.username
//     }, function (err, user) {
//         if (err) throw err;

//         if (!user) {
//             res.status(401).send({ success: false, msg: 'Authentication failed. User not found.' });
//         } else {
//             // check if password matches
//             user.comparePassword(req.body.password, function (err, isMatch) {
//                 if (isMatch && !err) {
//                     // if user is found and password is right create a token
//                     var token = jwt.sign(user.toJSON(), settings.secret);
//                     // return the information including token as JSON
//                     res.json({ success: true, token: 'JWT ' + token });
//                 } else {
//                     res.status(401).send({ success: false, msg: 'Authentication failed. Wrong password.' });
//                 }
//             });
//         }
//     });
// });


// //route for logging out a user
// router.get("/logout", function (req, res) {
//     req.logout();
//     res.redirect("/");
// });

// Matches with "/api/auth"
router.route("/")
    .get(urlControllers.findAll)
    .post(urlControllers.create);

// Matches with "/api/auth/:id"
router
    .route("/:id")
    .get(urlControllers.findById)
    .delete(urlControllers.remove);

module.exports = router;
