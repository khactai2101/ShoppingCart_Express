import db from "../models";

export const createRoleServices = ({ codeRole }) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Role.findOrCreate({
        where: { codeRole },
        defaults: { codeRole },
      });
      console.log();
      resolve({
        success: response[1] === true ? true : false,
        message:
          response[1] === true
            ? "Create role successfully"
            : "Role is available",
      });
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });

export const getAllRoleServices = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Role.findAll({
        attributes: {
          exclude: ["createdAt", "updatedAt"], // bỏ những cái không cần thiết
        },
      });
      const roles = response.map((role) => role.dataValues);
      resolve({
        success: true,
        data: roles,
      });
    } catch (error) {
      reject(error);
    }
  });

export const getOneRoleServices = ({ id }) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Role.findOne({
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
          message: "Role not found",
        });
      }
    } catch (error) {
      reject(error);
    }
  });

export const updateRoleServices = (id, body) =>
  new Promise(async (resolve, reject) => {
    try {
      const res = await db.Role.update(body, {
        where: { id },
      });
      console.log(res);
      if (res[0] === 0) {
        reject({
          success: false,
          message: `Role not found`,
        });
      } else {
        resolve({
          success: true,
          message: `Role updated successfully`,
        });
      }
    } catch (error) {
      reject(error);
    }
  });

export const deleteRoleServices = ({ id }) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Role.destroy({
        where: { id },
      });
      if (response === 0) {
        resolve({
          success: false,
          message: `Role not found`,
        });
      }
      resolve({
        success: response > 0 ? true : false,
        message: `Delete role successfully`,
      });
    } catch (error) {
      reject(error);
    }
  });
