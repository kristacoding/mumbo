const router = require("express").Router();
const authRoutes = require("./auth.js");

// URL routes


router.use("/auth", authRoutes);




module.exports = router;
