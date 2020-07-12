const express = require("express");
const router = express.Router();
const genreController = require("../controllers/genre");

router.get("/", authMiddleware.verifyJwtToken, genreController.getAllGenre);

router.post("/", authMiddleware.verifyJwtToken, genreController.posGenre);

router.put("/:id", authMiddleware.verifyJwtToken, genreController.updateGenre);

router.delete(
  "/:id",
  authMiddleware.verifyJwtToken,
  genreController.deleteGenre
);

module.exports = router;
