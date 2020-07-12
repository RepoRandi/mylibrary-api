const connection = require("../helpers/mysql");

module.exports = {
  getAuthorModel: () => {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM myauthor", (error, result) => {
        if (error) {
          reject(error);
        }
        resolve(result);
      });
    });
  },
  authorDetailModel: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM myauthor WHERE id = ?",
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
  addAuthorModel: (setData) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "INSERT INTO myauthor SET ?",
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
  updateAuthorModel: (setData, id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "UPDATE myauthor SET ? WHERE id=?",
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
  deleteAuthorModel: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "DELETE FROM myauthor WHERE id=?",
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
