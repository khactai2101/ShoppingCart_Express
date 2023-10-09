import db from "../models";

export const createImageService = ({ title, src, productId }) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Image.findOrCreate({
        where: { title, src, productId },
      });
      resolve({
        success: response[1] === true ? true : false,
        message:
          response[1] === true
            ? "Create Image successfully"
            : "Image is available",
      });
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });

// export const getAllReviewsServices = () =>
//   new Promise(async (resolve, reject) => {
//     try {
//       const response = await db.Review.findAll({
//         attributes: {
//           exclude: ["createdAt", "updatedAt"], // bỏ những cái không cần thiết
//         },
//       });
//       const reviews = response.map((review) => review.dataValues);
//       resolve({
//         success: true,
//         data: reviews,
//       });
//     } catch (error) {
//       reject(error);
//     }
//   });

// export const getOneReviewServices = ({ id }) =>
//   new Promise(async (resolve, reject) => {
//     try {
//       const response = await db.Review.findOne({
//         where: { id },
//         attributes: {
//           exclude: ["createdAt", "updatedAt"],
//         },
//       });

//       if (response?.dataValues !== undefined) {
//         resolve({
//           success: true,
//           data: response?.dataValues,
//         });
//       } else {
//         resolve({
//           success: false,
//           message: "Review not found",
//         });
//       }
//     } catch (error) {
//       reject(error);
//     }
//   });

// export const updateReviewServices = (id, body) =>
//   new Promise(async (resolve, reject) => {
//     try {
//       const res = await db.Review.update(body, {
//         where: { id },
//       });
//       console.log(res);
//       if (res[0] === 0) {
//         reject({
//           success: false,
//           message: `Review not found`,
//         });
//       } else {
//         resolve({
//           success: true,
//           message: `Review updated successfully`,
//         });
//       }
//     } catch (error) {
//       reject(error);
//     }
//   });

// export const deleteReviewServices = ({ id }) =>
//   new Promise(async (resolve, reject) => {
//     try {
//       const response = await db.Review.destroy({
//         where: { id },
//       });
//       if (response === 0) {
//         resolve({
//           success: false,
//           message: `Review not found`,
//         });
//       }
//       resolve({
//         success: response > 0 ? true : false,
//         message: `Delete Review successfully`,
//       });
//     } catch (error) {
//       reject(error);
//     }
//   });
