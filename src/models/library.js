const connection = require("../helpers/mysql");
module.exports = {
    getAllLibraryModel: function () {
        return new Promise((resolve, reject) => {
            connection.query("SELECT * FROM mybook JOIN mygenre ON mybook.id_genre=mygenre.id LEFT JOIN myauthor ON mybook.id_author=myauthor.id", function (error, result) {
                if (error) {
                    reject(error);
                }
                resolve(result);
            });
        });
    },
    postLibraryModel: function (setData) {
        return new Promise((resolve, reject) => {
            connection.query("INSERT INTO mybook SET ?", setData, function (error, result) {
                if (error) {
                    reject(error);
                }
                const newData = {
                    id: result.insertId,
                    ...setData,
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
                }
                const updateData = {
                    id,
                    ...setData,
                };
                console.log(setData)
                resolve(updateData);
            });
        });
    },
    deleteLibraryModel: function (id) {
        return new Promise((resolve, reject) => {
            connection.query("DELETE FROM mybook WHERE id=?", id, function (error, result) {
                if (error) {
                    reject(error);
                }

                resolve('Data Telah Terhapus' + id);
            });
        });
    },
    searchLibraryModel: function (data) {
        const search = data.title;
        // console.log(search);
        // console.log(data);
        return new Promise((resolve, reject) => {
            connection.query("SELECT * FROM mybook WHERE title=?", search, function (error, result) {
                if (error) {
                    reject(error);
                }
                resolve(result);
            });
        });
    },
    sortingLibraryModel: function (dataSort) {
        const sorting = dataSort.title;
        return new Promise((resolve, reject) => {
            connection.query("SELECT * FROM mybook ORDER BY title=? ASC", sorting, function (error, result) {
                if (error) {
                    reject(error);
                }
                resolve(result);
            });
        });
    },
    pageLibraryModel: function (dataPage) {
        const page = dataPage.title;
        return new Promise((resolve, reject) => {
            connection.query("SELECT * FROM mybook limit 2", page, function (error, result) {
                if (error) {
                    reject(error);
                }
                resolve(result);
            });
        });
    },
};