var passport = require('passport');
var settings = require('../../config/settings');
require('../../config/passport')(passport);
var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();
var User = require("../../models/user");
var urlControllers = require("../../controllers/urlcontrollers");
require('crypto').randomBytes(64).toString('hex');

var userToken; 


router.post('/register', function (req, res) {
    console.log(req.body)
    if (!req.body.username || !req.body.password) {
        res.json({ success: false, msg: 'Please pass username and password.' });
    } else {
        var newUser = new User({
            username: req.body.username,
            password: req.body.password
        });
        // save the user
        newUser.save(function (err) {
            if (err) {
                console.log(err)
                return res.json({ success: false, msg: 'Username already exists.' });
            }
            res.json({ success: true, msg: 'Successful created new user.' });
        });
    }
});

router.post('/login', function (req, res) {
    console.log(req.body.username)
    User.findOne({
        username: req.body.username
    }, function (err, user) {
        if (err) throw err;

        if (!user) {
            res.status(401).send({ success: false, msg: 'Authentication failed. User not found.' });
        } else {
            // check if password matches
            user.comparePassword(req.body.password, function (err, isMatch) {
                if (isMatch && !err) {
                    // if user is found and password is right create a token
                    var token = jwt.sign(user.toJSON(), settings.secret);
                    // return the information including token as JSON
                    console.log(token); 
                    userToken = token; 
                    res.json({ success: true, token: 'JWT ' + token });

                } else {
                    res.status(401).send({ success: false, msg: 'Authentication failed. Wrong password.' });
                }
            });
        }
    });
});

//route for logging out a user
router.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
});

const dotenv = require("dotenv");

// get config vars
dotenv.config();

// access config var
process.env.TOKEN_SECRET;

function authenticateToken(req, res, next) {
    console.log(req);
    // Gather the jwt access token from the request header
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (userToken == null) return res.sendStatus(401) // if there isn't any token

    jwt.verify(userToken, (process.env.ACCESS_TOKEN_SECRET), (err, user) => {
        console.log(err)
        if (err) return res.sendStatus(403);
        req.user = user;

        next() // pass the execution off to whatever request the client intended

    })
}

// Matches with "/api/auth"
router.route("/")
    .get(authenticateToken, urlControllers.findAll)
    .post(authenticateToken,urlControllers.create);

// Matches with "/api/auth/:id"
router
    .route("/:id")
    .get(urlControllers.findById)
    .put(urlControllers.update)
    .delete(urlControllers.remove);


module.exports = router;
