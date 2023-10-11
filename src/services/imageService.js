import db from "../models";
import * as imageRepository from "../repositories/imageRepository";

export const createImageService = async (body) => {
  try {
    let hasSuccess = false;
    for (const image of body) {
      try {
        const response = await imageRepository.createImage(image);
        const success = response[1] === true ? true : false;
        if (success) {
          hasSuccess = true;
        }
      } catch (error) {
        throw error;
      }
    }
    if (hasSuccess) {
      return {
        success: true,
        message: "Create image successfully",
      };
    } else {
      return {
        success: false,
        message: "Image is available",
      };
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getAllImageService = async () => {
  try {
    const response = await imageRepository.getAllImage();
    return {
      success: true,
      data: response,
    };
  } catch (error) {
    return error;
  }
};

export const getOneImageService = ({ id }) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Image.findOne({
        where: { id },
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
        // include: [
        //     {
        //         model: db.Product,
        //         as: "product",
        //         attributes: {
        //             exclude: ["createdAt", "updatedAt"],
        //         },
        //     },
        // ],
      });
      resolve({
        success: true,
        data: response.dataValues,
      });
    } catch (error) {
      reject(error);
    }
  });

export const updateImageService = (id, body) =>
  new Promise(async (resolve, reject) => {
    try {
      await db.Image.update(
        { src: body },
        {
          where: { id },
        }
      );
      resolve({
        success: true,
        message: `Updated image successfully`,
      });
    } catch (error) {
      reject(error);
    }
  });

export const deleteImageService = ({ id }) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Image.destroy({
        where: { id },
      });
      resolve({
        success: response > 0 ? true : false,
        message: `Delete successfully`,
      });
    } catch (error) {
      reject(error);
    }
  });
