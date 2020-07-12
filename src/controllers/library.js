const helper = require("../helpers/index");
const libraryModel = require("../models/library");

module.exports = {
  detailLibrary: async (request, response) => {
    const id = request.params.id;
    try {
      const result = await libraryModel.detailLibraryModel(id);
      return helper.response(response, "success", result, 200);
    } catch (error) {
      console.log(error);
      return helper.response(response, "fail", "Internal server Error", 500);
    }
  },
  getAllLibrary: async function (request, response) {
    const search = request.query.search;
    const sorting = request.query.sorting;
    const page = request.query.page;
    // console.log(request.query);
    // console.log(search);
    // console.log(sorting);
    // console.log(page);
    try {
      if (search && !sorting && !page) {
        const result = await libraryModel.searchLibraryModel(search);
        return helper.response(response, "success", result, 200);
      } else if (sorting && !search && !page) {
        const result = await libraryModel.sortingLibraryModel(sorting);
        // console.log(sorting);
        return helper.response(response, "success", result, 200);
      } else if (page && !search && !sorting) {
        const result = await libraryModel.pageLibraryModel(page);
        // console.log(page);
        return helper.response(response, "success", result, 200);
      } else if (search && sorting && page) {
        const result = await libraryModel.searchSortPageLibraryModel(
          search,
          sorting,
          page
        );
        return helper.response(response, "success", result, 200);
      }
      const result = await libraryModel.getAllLibraryModel();
      return helper.response(response, "success", result, 200);
    } catch (error) {
      console.log(error);
      return helper.response(response, "fail", "Internal Server Error", 500);
    }
  },
  posLibrary: async function (request, response) {
    const setData = request.body;
    setData.image = request.file ? request.file.filename : "";
    // console.log(request.file);
    // console.log(setData);
    try {
      const result = await libraryModel.postLibraryModel(setData);
      return helper.response(response, "success", result, 200);
    } catch (error) {
      console.log(error);
      return helper.response(
        response,
        "fail",
        "Internal Server Error",
        result,
        500
      );
    }
  },
  updateLibrary: async function (request, response) {
    const setData = request.body;
    setData.image = request.file ? request.file.filename : "";
    const id = request.params.id;
    try {
      const result = await libraryModel.updateLibraryModel(setData, id);
      return helper.response(response, "success", result, 200);
    } catch (error) {
      console.log(error);
      return helper.response(
        response,
        "fail",
        "Internal Server Error",
        result,
        500
      );
    }
  },
  deleteLibrary: async function (request, response) {
    const id = request.params.id;
    try {
      const result = await libraryModel.deleteLibraryModel(id);
      return helper.response(response, "success", result, 200);
    } catch (error) {
      console.log(error);
      return helper.response(
        response,
        "fail",
        "Internal Server Error",
        result,
        500
      );
    }
  },
};
