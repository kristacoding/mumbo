const router = require("express").Router();
const urlRoutes = require("./websiteapi");


// URL routes
router.use("/search", urlRoutes);


module.exports = router;
