const express = require("express");
const router = express.Router();
const libraryRouter = require("./library");
const authRouter = require("./auth");
const genreRouter = require("./genre");
const authorRouter = require("./author");

router.use("/book", libraryRouter);
router.use("/auth", authRouter);
router.use("/genre", genreRouter);
router.use("/author", authorRouter);

module.exports = router;
