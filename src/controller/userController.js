import * as services from "../service";

export const getAllUserController = async (req, res) => {
  try {
    const response = await services.getAllUserServices();
    return res.status(200).json(response);
  } catch (error) {
    // return internalServerError(res);
  }
};
// export const getOneCategoryController = async (req, res) => {
//   try {
//     const { id } = req.params;

//     const response = await services.getOneCategoryServices({ id });
//     return res.status(200).json(response);
//   } catch (error) {
//     if (error.success === false) {
//       return res.status(404).json({
//         error: true,
//         message: "Category not found",
//       });
//     }
//     return { error: "error" };
//   }
// };
// export const updateCategoryController = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const response = await services.updateCategoryServices(id, req.body);
//     return res.status(200).json(response);
//   } catch (error) {
//     if (error.success === false) {
//       return res.status(404).json({
//         error: true,
//         message: "Category not found",
//       });
//     }
//     return { error: "error" };
//   }
// };
// export const deleteCategoryController = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const response = await services.deleteCategoryServices({ id });
//     return res.status(200).json(response);
//   } catch (error) {
//     if (error.success === false) {
//       return res.status(404).json({
//         error: true,
//         message: "Category not found",
//       });
//     }
//     return { error: "error" };
//   }
// };
