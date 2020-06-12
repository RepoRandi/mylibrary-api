const express = require('express');
const router = express.Router();
const libraryController = require('../controllers/library');
const multer = require('multer');
const path = require('path');
// const upload = multer({
//     dest: './src/images'
// });

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './src/images')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage
})

router.get('/', libraryController.getAllLibrary);

router.post('/', upload.single('image'), libraryController.posLibrary);

router.put('/:id', libraryController.updateLibrary);

router.delete('/:id', libraryController.deleteLibrary);

router.get('/search', libraryController.searchLibrary);

module.exports = router;