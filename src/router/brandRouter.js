import * as controller from "../controller";
import express from "express";

const router = express.Router();

router.post("/", controller.createBrandController);
router.get("/", controller.getAllBrandController);
router.get("/:id", controller.getOneBrandController);
router.put("/:id", controller.updateBrandController);
router.delete("/:id", controller.deleteBrandController);

module.exports = router;
