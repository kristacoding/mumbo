const router = require("express").Router();
const urlRoutes = require("./websiteapi");
const authRoutes = require("./auth");

// URL routes
router.use("/search", urlRoutes);

router.use("/auth", authRoutes); 




module.exports = router;
