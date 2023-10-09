import db from "../models";

export const createBrandService = ({ title }) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Brand.findOrCreate({
        where: { title },
        defaults: { title },
      });
      resolve({
        success: response[1] === true ? true : false,
        message:
          response[1] === true
            ? "Create Brand successfully"
            : "Brand is available",
      });
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });

export const getAllBrandServices = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Brand.findAll({
        attributes: {
          exclude: ["createdAt", "updatedAt"], // bỏ những cái không cần thiết
        },
      });
      const brands = response.map((brand) => brand.dataValues);
      resolve({
        success: true,
        data: brands,
      });
    } catch (error) {
      reject(error);
    }
  });

export const getOneBrandServices = ({ id }) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Brand.findOne({
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
          message: "Brand not found",
        });
      }
    } catch (error) {
      reject(error);
    }
  });

export const updateBrandServices = (id, body) =>
  new Promise(async (resolve, reject) => {
    try {
      const res = await db.Brand.update(body, {
        where: { id },
      });
      console.log(res);
      if (res[0] === 0) {
        reject({
          success: false,
          message: `Brand not found`,
        });
      } else {
        resolve({
          success: true,
          message: `Brand updated successfully`,
        });
      }
    } catch (error) {
      reject(error);
    }
  });

export const deleteBrandServices = ({ id }) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Brand.destroy({
        where: { id },
      });
      if (response === 0) {
        resolve({
          success: false,
          message: `Brand not found`,
        });
      }
      resolve({
        success: response > 0 ? true : false,
        message: `Delete brand successfully`,
      });
    } catch (error) {
      reject(error);
    }
  });
