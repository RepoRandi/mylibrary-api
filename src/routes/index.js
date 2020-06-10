const express = require('express');
const router = express.Router();
const libraryRouter = require('./library');

router.use('/mybook', libraryRouter);

module.exports = router;