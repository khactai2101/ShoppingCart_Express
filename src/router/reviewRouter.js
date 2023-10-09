import * as controller from "../controller";
import express from "express";

const router = express.Router();

router.post("/", controller.createReviewController);
router.get("/", controller.getAllReviewsController);
router.get("/:id", controller.getOneReviewController);
router.put("/:id", controller.updateReviewController);
router.delete("/:id", controller.deleteReviewController);

module.exports = router;
