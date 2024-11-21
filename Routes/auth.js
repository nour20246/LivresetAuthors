import { signUp, login } from "../Controllers/auth.js";

import express from "express";
const router = express.Router();

router.post("/signUp", signUp);

router.post("/login", login);
export default router;