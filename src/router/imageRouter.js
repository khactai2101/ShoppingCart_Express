import * as controller from "../controller";
import express from "express";

const router = express.Router();

router.post("/", controller.createImageController);

module.exports = router;
