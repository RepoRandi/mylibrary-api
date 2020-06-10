const connection = require('../helpers/mysql');
module.exports = {
    getAllLibraryModel: function () {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM mybook', function (error, result) {
                if (error) {
                    reject(error);
                };
                resolve(result);
            });
        });
    },
    postLibraryModel: function (setData) {
        return new Promise((resolve, reject) => {
            connection.query("INSERT INTO mybook SET ?", setData, function (error, result) {
                if (error) {
                    reject(error);
                };
                const newData = {
                    id: result.insertId,
                    ...setData
                };
                resolve(newData);
            });
        });
    },
    updateLibraryModel: function (setData, id) {
        return new Promise((resolve, reject) => {
            connection.query("UPDATE mybook SET ? WHERE id=?", [setData, id], function (error, result) {
                if (error) {
                    reject(error);
                };
                const updateData = {
                    id,
                    ...setData
                };
                resolve(updateData);
            });
        });
    },
    deleteLibraryModel: function (id) {
        return new Promise((resolve, reject) => {
            connection.query("DELETE FROM mybook WHERE id=?", id, function (error, result) {
                if (error) {
                    reject(error);
                };
                const deleteData = {
                    id
                };
                resolve(deleteData);
            });
        });
    }
};