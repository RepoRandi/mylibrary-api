const express = require("express");
const router = express.Router();
const authorController = require("../controllers/author");

router.get("/", authMiddleware.verifyJwtToken, authorController.getAuthor);

router.get(
  "/:id",
  authMiddleware.verifyJwtToken,
  authorController.detailAuthor
);

router.post("/", authMiddleware.verifyJwtToken, authorController.addAuthor);

router.put(
  "/:id",
  authMiddleware.verifyJwtToken,
  authorController.updateAuthor
);

router.delete(
  "/:id",
  authMiddleware.verifyJwtToken,
  authorController.deleteAuthor
);

module.exports = router;
