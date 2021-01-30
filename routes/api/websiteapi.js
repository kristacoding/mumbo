const router = require("express").Router();
const urlController = require("../../controllers/urlControllers");

// Matches with "/api/search"
router.route("/")
  .get(urlController.findAll)
  .post(urlController.create);

// Matches with "/api/search/:id"
router
  .route("/:id")
  .get(urlController.findById)
  .put(urlController.update)
  .delete(urlController.remove);

module.exports = router;
