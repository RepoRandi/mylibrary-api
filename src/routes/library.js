const express = require('express');
const router = express.Router();
const libraryController = require('../controllers/library');
const multer = require('multer');
const upload = multer({
    dest: './src/images'
});


router.get('/', libraryController.getAllLibrary);

router.post('/', upload.single('image'), libraryController.posLibrary);

router.put('/:id', libraryController.updateLibrary);

router.delete('/:id', libraryController.deleteLibrary);

router.get('/search', libraryController.searchLibrary);

module.exports = router;