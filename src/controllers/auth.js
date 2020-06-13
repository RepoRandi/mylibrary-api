const authModel = require('../models/auth');
const helper = require('../helpers/index');

module.exports = {
    register: async function (request, response) {
        const setData = request.body;
        try {
            const result = await authModel.registerModel(setData);
            return helper.response(response, 'success', result, 200);
        } catch (error) {
            console.log(error);
            return helper.response(response, 'fail', 'Internal Server Error', 500);
        }
    }
};