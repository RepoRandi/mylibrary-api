const express = require("express");
const router = express.Router();
const libraryController = require("../controllers/library");
const authMiddleware = require("../middleware/auth");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./images");
  },
  filename: function (req, file, cb) {
    const splitName = file.originalname.split(".");
    const ext = splitName.pop();
    const newName = splitName.join();
    cb(null, `${newName}-${Date.now()}.${ext}`);
  },
});
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 2000000,
  },
});

router.get("/", authMiddleware.verifyJwtToken, libraryController.getAllLibrary);

router.get(
  "/:id",
  authMiddleware.verifyJwtToken,
  libraryController.detailLibrary
);

router.post(
  "/",
  authMiddleware.verifyJwtToken,
  upload.single("image"),
  libraryController.posLibrary
);

router.put(
  "/:id",
  authMiddleware.verifyJwtToken,
  upload.single("image"),
  libraryController.updateLibrary
);

router.delete(
  "/:id",
  authMiddleware.verifyJwtToken,
  libraryController.deleteLibrary
);

module.exports = router;
