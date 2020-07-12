const connection = require("../helpers/mysql");

module.exports = {
  getGenreModel: () => {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM mygenre", (error, result) => {
        if (error) {
          reject(error);
        }
        resolve(result);
      });
    });
  },
  genreDetailModel: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM mygenre WHERE id = ?",
        id,
        (error, result) => {
          if (error) {
            reject(error);
          }
          resolve(result);
        }
      );
    });
  },
  addGenreModel: (setData) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "INSERT INTO mygenre SET ?",
        setData,
        (error, result) => {
          if (error) {
            reject(error);
          }
          const newData = {
            id: result.insertId,
            ...setData,
          };
          resolve(newData);
        }
      );
    });
  },
  updateGenreModel: (setData, id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "UPDATE mygenre SET ? WHERE id=?",
        [setData, id],
        (error, result) => {
          if (error) {
            reject(error);
          }
          const newData = {
            id,
            ...setData,
          };
          resolve(newData);
        }
      );
    });
  },
  deleteGenreModel: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "DELETE FROM mygenre WHERE id=?",
        id,
        (error, result) => {
          if (error) {
            reject(error);
          }
          const newData = {
            id,
          };
          resolve(newData);
        }
      );
    });
  },
};
