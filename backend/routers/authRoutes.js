import express from "express";
import {
    register,
    refreshToken,
} from "../controllers/authController.js";

const router = express.Router();

router.post("/register", register);
router.post("/refresh", refreshToken);

export default router;