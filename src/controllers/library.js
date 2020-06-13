const helper = require('../helpers/index');
const libraryModel = require('../models/library');

module.exports = {
    getAllLibrary: async function (request, response) {
        try {
            const result = await libraryModel.getAllLibraryModel();
            return helper.response(response, 'success', result, 200);
        } catch (error) {
            console.log(error);
            return helper.response(response, 'fail', 'Internal Server Error', result, 500);
        }
    },
    posLibrary: async function (request, response) {
        const setData = request.body;
        setData.image = request.file ? request.file.filename : '|';
        // console.log(request.file);
        // console.log(setData);
        try {
            const result = await libraryModel.postLibraryModel(setData);
            return helper.response(response, 'success', result, 200);
        } catch (error) {
            console.log(error);
            return helper.response(response, 'fail', 'Internal Server Error', result, 500);
        }
    },
    updateLibrary: async function (request, response) {
        const setData = request.body;
        setData.image = request.file ? request.file.filename : '';
        const id = request.params.id;
        try {
            const result = await libraryModel.updateLibraryModel(setData, id);
            return helper.response(response, 'success', result, 200);
        } catch (error) {
            console.log(error);
            return helper.response(response, 'fail', 'Internal Server Error', result, 500);
        }
    },
    deleteLibrary: async function (request, response) {
        const id = request.params.id;
        try {
            const result = await libraryModel.deleteLibraryModel(id);
            return helper.response(response, 'success', result, 200);
        } catch (error) {
            console.log(error);
            return helper.response(response, 'fail', 'Internal Server Error', result, 500);
        }
    },
    searchLibrary: async function (request, response) {
        const search = request.query;
        try {
            const result = await libraryModel.searchLibraryModel(search);
            return helper.response(response, 'success', result, 200);
        } catch (error) {
            console.log(error);
            return helper.response(response, 'fail', 'Internal Server Error', result, 500);
        }
    },
};