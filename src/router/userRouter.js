import * as controller from "../controller";
import express from "express";

const router = express.Router();

router.get("/", controller.getAllUserController);
// router.get("/:id", controller.getOneRole);
// router.put("/:id", controller.updateRole);
// router.delete("/:id", controller.deleteRole);

module.exports = router;
