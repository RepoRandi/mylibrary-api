const express = require('express');
const router = express.Router();
const libraryController = require('../controllers/library');
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './src/images')
    },
    filename: function (req, file, cb) {
        const splitName = file.originalname.split('.');
        const ext = splitName.pop();
        const newName = splitName.join();
        cb(null, `${newName}-${Date.now()}.${ext}`);
    }
});
const upload = multer({
    storage: storage
});

router.get('/', libraryController.getAllLibrary);

router.post('/', upload.single('image'), libraryController.posLibrary);

router.put('/:id', upload.single('image'), libraryController.updateLibrary);

router.delete('/:id', libraryController.deleteLibrary);


module.exports = router;