const helper = require("../helper/index");
const authorModel = require("../models/author");

module.exports = {
  getAuthor: async (req, res) => {
    try {
      const result = await authorModel.getAuthorModel();
      return helper.response(res, "success", result, 200);
    } catch (error) {
      console.log(error);
      return helper.response(res, "fail", "Internal server Error", 500);
    }
  },
  detailAuthor: async (req, res) => {
    const id = req.params.id;
    try {
      const result = await authorModel.authorDetailModel(id);
      return helper.response(res, "success", result, 200);
    } catch (error) {
      console.log(error);
      return helper.response(res, "fail", "Internal server Error", 500);
    }
  },
  addAuthor: async (req, res) => {
    const setData = req.body;
    try {
      const result = await authorModel.addAuthorModel(setData);
      return helper.response(res, "success", result, 201);
    } catch (error) {
      console.log(error);
      return helper.response(res, "fail", "Internal server Error", 500);
    }
  },
  updateAuthor: async (req, res) => {
    const setData = req.body;
    const id = req.params.id;
    setData.updated_at = new Date();
    try {
      const result = await authorModel.updateAuthorModel(setData, id);
      return helper.response(res, "success", result, 200);
    } catch (error) {
      console.log(error);
      return helper.response(res, "fail", "Internal server Error", 500);
    }
  },
  deleteAuthor: async (req, res) => {
    const id = req.params.id;
    try {
      const result = await authorModel.deleteAuthorModel(id);
      return helper.response(res, "success", result, 200);
    } catch (error) {
      console.log(error);
      return helper.response(res, "fail", "Internal server Error", 500);
    }
  },
};
