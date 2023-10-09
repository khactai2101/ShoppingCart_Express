import * as controller from "../controller";
import express from "express";

const router = express.Router();

router.post("/", controller.createCategoryController);
router.get("/", controller.getAllCategoriesController);
router.get("/:id", controller.getOneCategoryController);
router.put("/:id", controller.updateCategoryController);
router.delete("/:id", controller.deleteCategoryController);

module.exports = router;
