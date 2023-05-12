const { Router } = require("express");

const TagsController = require("../controllers/TagsController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const tagsRoutes = Router();

const tagsController = new TagsController();

<<<<<<< HEAD
tagsRoutes.get("/", ensureAuthenticated, tagsController.index);
=======
tagsRoutes.get(":/user_id", tagsController.index);
>>>>>>> f7c80e41a54daecbb122dd6dfe863b4d9fd3d7c3

module.exports = tagsRoutes;