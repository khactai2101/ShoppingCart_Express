import db from "../models";
import bcrypt from "bcryptjs";

const salt = bcrypt.genSaltSync(10);

export const registerService = ({ fullName, email, password }) =>
  new Promise(async (resolve, reject) => {
    try {
      const hashPassword = bcrypt.hashSync(password, salt);
      const defaultAvatar = `https://phongreviews.com/wp-content/uploads/2022/11/avatar-facebook-mac-dinh-12.jpg`;
      const response = await db.User.findOrCreate({
        where: { email },
        defaults: {
          fullName,
          email,
          password: hashPassword,
          avatar: defaultAvatar,
        },
      });
      resolve({
        success: response[1] === true ? true : false,
        message:
          response[1] === true
            ? "Create Account successfully"
            : "Account is available",
      });
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
