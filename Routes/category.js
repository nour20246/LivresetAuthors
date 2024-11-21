import express from "express";
import { addCategory } from "../Controllers/category.js";

const router = express.Router();
router.post("/add", addCategory);

export default router;