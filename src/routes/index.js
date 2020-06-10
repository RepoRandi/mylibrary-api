const express = require('express');
const router = express.Router();
const libraryRouter = require('./library');

router.use('/library', libraryRouter);

module.exports = router;