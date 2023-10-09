const User = require("../models/user.model");

// Middleware để kiểm tra sự tồn tại của người dùng
const checkUserExistence = async (req, res, next) => {
  const { username } = req.body;
  console.log(username);
  const checkUser = await User.findOne({ where: { username: username } });
  if (checkUser) {
    return res.status(409).json({ msg: "username already exists" });
  } else {
    res.status(200).json({ msg: " pass" });
    next();
  }

  // } catch (error) {
  //   console.error("Error in checkUserExistence:", error);
  //   res.status(500).json({ msg: "server error" });
};

module.exports = checkUserExistence;
