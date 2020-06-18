const authModel = require('../models/auth');
const helper = require('../helpers/index');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../configs/global');

module.exports = {
    register: async function (request, response) {
        const setData = request.body;
        const salt = bcrypt.genSaltSync(10);
        const hashPass = bcrypt.hashSync(setData.password, salt);
        setData.password = hashPass;
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
                    const tokenData = {
                        ...result[0]
                    };
                    console.log(config.jwtSecretKey)
                    const token = jwt.sign(tokenData, 'KODERAHASIA', {
                        expiresIn: '120s'
                    });
                    result[0].token = token;
                    return helper.response(response, 'success', result, 200);
                }
                return helper.response(response, 'fail', 'Username or password is wrong!', 400);
            }
            return helper.response(response, 'fail', 'Username or password is wrong!', 400);
        } catch (error) {
            console.log(error);
            return helper.response(response, 'fail', 'Internal Server Error', 500);
        }
    }
};