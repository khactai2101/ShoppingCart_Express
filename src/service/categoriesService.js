import db from "../models";

export const createCategoryService = ({ title }) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Category.findOrCreate({
        where: { title },
        defaults: { title },
      });
      resolve({
        success: response[1] === true ? true : false,
        message:
          response[1] === true
            ? "Create Category successfully"
            : "Category is available",
      });
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });

export const getAllCategoriesServices = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Category.findAll({
        attributes: {
          exclude: ["createdAt", "updatedAt"], // bỏ những cái không cần thiết
        },
      });
      const categories = response.map((category) => category.dataValues);
      resolve({
        success: true,
        data: categories,
      });
    } catch (error) {
      reject(error);
    }
  });

export const getOneCategoryServices = ({ id }) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Category.findOne({
        where: { id },
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });

      if (response?.dataValues !== undefined) {
        resolve({
          success: true,
          data: response?.dataValues,
        });
      } else {
        resolve({
          success: false,
          message: "Category not found",
        });
      }
    } catch (error) {
      reject(error);
    }
  });

export const updateCategoryServices = (id, body) =>
  new Promise(async (resolve, reject) => {
    try {
      const res = await db.Category.update(body, {
        where: { id },
      });
      console.log(res);
      if (res[0] === 0) {
        reject({
          success: false,
          message: `Category not found`,
        });
      } else {
        resolve({
          success: true,
          message: `Category updated successfully`,
        });
      }
    } catch (error) {
      reject(error);
    }
  });

export const deleteCategoryServices = ({ id }) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Category.destroy({
        where: { id },
      });
      if (response === 0) {
        resolve({
          success: false,
          message: `Category not found`,
        });
      }
      resolve({
        success: response > 0 ? true : false,
        message: `Delete Category successfully`,
      });
    } catch (error) {
      reject(error);
    }
  });
