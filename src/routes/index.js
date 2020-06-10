const express = require('express');
const router = express.Router();
const productRouter = require('./library');

router.use('/library', libraryRouter);

module.exports = router;