const express = require('express');
const router = express.Router();
const libraryRouter = require('./library');
const authRouter = require('./auth')

router.use('/mybook', libraryRouter);
router.use('/auth', authRouter);

module.exports = router;