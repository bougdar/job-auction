import express from "express";
import {
    register,
    refreshToken,
    login,
    googleLogin,
} from "../controllers/authController.js";

const router = express.Router();

router.post("/register", register);
router.post("/refresh", refreshToken);
router.post("/login", login);
router.post("/google", googleLogin); 
export default router;