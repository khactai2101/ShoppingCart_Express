import * as services from "../service";

export const registerController = async (req, res) => {
  try {
    const response = await services.registerService(req.body);
    return res.status(200).json(response);
  } catch (error) {
    // return internalServerError(res);
  }
};
