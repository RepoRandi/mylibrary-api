const express = require('express');
const router = express.Router();
const libraryController = require('../controllers/library');

router.get('/', libraryController.getAlllibrary);

router.post('/', libraryController.posLibrary);

router.put('/:id', libraryController.updateLibrary);

router.delete('/:id', libraryController.deleteLibrary);

module.exports = router;