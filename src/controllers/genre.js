const helper = require("../helpers/index");
const genreModel = require("../models/genre");

module.exports = {
  getGenre: async (req, res) => {
    try {
      const result = await genreModel.getGenreModel();
      return helper.response(res, "success", result, 200);
    } catch (error) {
      console.log(error);
      return helper.response(res, "fail", "Internal server Error", 500);
    }
  },
  detailGenre: async (req, res) => {
    const id = req.params.id;
    try {
      const result = await genreModel.detailGenreModel(id);
      return helper.response(res, "success", result, 200);
    } catch (error) {
      console.log(error);
      return helper.response(res, "fail", "Internal server Error", 500);
    }
  },
  addGenre: async (req, res) => {
    const setData = req.body;
    try {
      const result = await genreModel.addGenreModel(setData);
      return helper.response(res, "success", result, 201);
    } catch (error) {
      console.log(error);
      return helper.response(res, "fail", "Internal server Error", 500);
    }
  },
  updateGenre: async (req, res) => {
    const setData = req.body;
    const id = req.params.id;
    setData.updated_at = new Date();
    try {
      const result = await genreModel.updateGenreModel(setData, id);
      return helper.response(res, "success", result, 200);
    } catch (error) {
      console.log(error);
      return helper.response(res, "fail", "Internal server Error", 500);
    }
  },
  deleteGenre: async (req, res) => {
    const id = req.params.id;
    try {
      const result = await genreModel.deleteGenreModel(id);
      return helper.response(res, "success", result, 200);
    } catch (error) {
      console.log(error);
      return helper.response(res, "fail", "Internal server Error", 500);
    }
  },
};
