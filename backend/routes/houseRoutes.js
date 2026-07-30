import express from "express";
import { generateHouseController } from "../controllers/houseController.js";

const router = express.Router();

router.get("/generate", generateHouseController);
router.post("/generate", generateHouseController);

export default router;