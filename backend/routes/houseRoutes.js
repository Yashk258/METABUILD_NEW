import express from "express";
import { generateHouse } from "../controllers/houseController.js";

const router = express.Router();

router.post("/generate", generateHouse);

export default router;