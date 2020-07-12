const express = require("express");
const router = express.Router();
const genreController = require("../controllers/genre");

router.get("/", authMiddleware.verifyJwtToken, genreController.getGenre);

router.get("/:id", authMiddleware.verifyJwtToken, genreController.detailGenre);

router.post("/", authMiddleware.verifyJwtToken, genreController.addGenre);

router.put("/:id", authMiddleware.verifyJwtToken, genreController.updateGenre);

router.delete(
  "/:id",
  authMiddleware.verifyJwtToken,
  genreController.deleteGenre
);

module.exports = router;
