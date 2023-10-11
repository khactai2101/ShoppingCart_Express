import * as controller from "../controllers";
import express from "express";

const router = express.Router();

router.get("/", controller.getAllUserController);
router.get("/:id", controller.getOneUserController);
router.put("/:id", controller.updateUserController);
router.delete("/:id", controller.deleteUserController);

module.exports = router;
