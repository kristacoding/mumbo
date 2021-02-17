const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const db = require("../models");

passport.use(new LocalStrategy(
  { usernameField: "username" },
  // This function handles a user trying to log in
  function(username, password, done) {
    db.User.findOne({ username: username }, function(err, user) {
      // If there's an error
      if (err) return done(err);

      // If the user doesn't exist
      if (!user) return done(null, false, { message: "No user exists with that username." });

      // If the password doesn't match
      if (!user.validPassword(password))  return done(null, false, { message: "Incorrect password." });

      // Otherwise, return the user and signal to let them log in
      return done(null, user);
    });
  }
));

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

module.exports = passport;