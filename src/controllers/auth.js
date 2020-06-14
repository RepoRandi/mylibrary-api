const authModel = require('../models/auth');
const helper = require('../helpers/index');
const bcrypt = require('bcrypt');


module.exports = {
    register: async function (request, response) {
        const setData = request.body;
        const salt = bcrypt.genSaltSync(10);
        const hashPass = bcrypt.hashSync(setData.password, salt);
        setData.password = hashPass;
        // console.log(setData);
        // console.log(hashPass);
        try {
            const result = await authModel.registerModel(setData);
            delete result.password;
            return helper.response(response, 'success', result, 200);
        } catch (error) {
            console.log(error);
            return helper.response(response, 'fail', 'Internal Server Error', 500);
        }
    },
    login: async function (request, response) {
        const loginData = request.body;
        try {
            const result = await authModel.loginModel(loginData.username);
            if (result.length > 0) {
                const hashPass = result[0].password;
                const checkPass = bcrypt.compareSync(loginData.password, hashPass);
                if (checkPass) {
                    delete result[0].password;
                    return helper.response(response, 'success', result, 200);
                }
                return helper.response(response, 'fail', 'UserName Or PassWord Is Wrong!', 400);
            }
            return helper.response(response, 'fail', 'UserName Or PassWord Is Wrong!', 400);
        } catch (error) {
            console.log(error);
            return helper.response(response, 'fail', 'Internal Server Error', 500);
        }
    }
};