import db from "../models";

export const getAllUserServices = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.User.findAll({
        attributes: {
          exclude: ["createdAt", "updatedAt", "password", "roleId"], // bỏ những cái không cần thiết
        },
      });
      const users = response.map((user) => user.dataValues);
      resolve({
        success: true,
        data: users,
      });
    } catch (error) {
      reject(error);
    }
  });

export const getOneUserServices = ({ id }) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.User.findOne({
        where: { id },
        attributes: {
          exclude: ["createdAt", "updatedAt", "roleId"],
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
          message: "User not found",
        });
      }
    } catch (error) {
      reject(error);
    }
  });

export const updateUserServices = (id, body) =>
  new Promise(async (resolve, reject) => {
    try {
      const res = await db.User.update(body, {
        where: { id },
      });
      console.log(res);
      if (res[0] === 0) {
        reject({
          success: false,
          message: `User not found`,
        });
      } else {
        resolve({
          success: true,
          message: `User updated successfully`,
        });
      }
    } catch (error) {
      reject(error);
    }
  });

export const deleteUserServices = ({ id }) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.User.destroy({
        where: { id },
      });
      if (response === 0) {
        resolve({
          success: false,
          message: `User not found`,
        });
      }
      resolve({
        success: response > 0 ? true : false,
        message: `Delete User successfully`,
      });
    } catch (error) {
      reject(error);
    }
  });
