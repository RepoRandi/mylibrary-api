const helper = require('../helpers/index');
const productModel = require('../models/library');

module.exports = {
    getAllLibrary: async function (request, response) {
        try {
            const result = await productModel.getAllLibraryModel();
            return helper.response(response, 'success', result, 200);
        } catch (error) {
            console.log(error);
            return helper.response(response, 'fail', 'Internal Server Error', result, 500);
        }
    },
    posLibrary: async function (request, response) {
        const setData = request.body;
        try {
            const result = await productModel.postLibraryModel(setData);
            const newData = {
                id: result.insertId,
                ...setData
            };
            return helper.response(response, 'success', result, 200);
        } catch (error) {
            console.log(error);
            return helper.response(response, 'fail', 'Internal Server Error', result, 500);
        }
    },
    updateLibrary: async function (request, response) {
        const setData = request.body;
        const id = request.params.id;
        try {
            const result = await productModel.updateLibraryModel(setData, id);
            const updateData = {
                id,
                ...setData
            };
            return helper.response(response, 'success', result, 200);
        } catch (error) {
            console.log(error);
            return helper.response(response, 'fail', 'Internal Server Error', result, 500);
        }
    },
    deleteLibrary: async function (request, response) {
        const id = request.params.id;
        try {
            const result = await productModel.deleteLibraryModel(id);
            const deleteData = {
                id
            };
            return helper.response(response, 'success', result, 200);
        } catch (error) {
            console.log(error);
            return helper.response(response, 'fail', 'Internal Server Error', result, 500);
        }
    }
};