import * as controller from "../controller";
import express from "express";

const router = express.Router();

router.post("/register", controller.registerController);

module.exports = router;
