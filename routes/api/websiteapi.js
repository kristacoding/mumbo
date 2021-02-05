const router = require("express").Router();
const urlController = require("../../controllers/urlControllers");
const db = url("../models")

router.get('/search', (req, res) => {
  db.WebsiteInfo.find({
    
  })
})
