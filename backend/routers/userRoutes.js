import express from "express";
import {
    createUserByAdmin,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
    updateProfile,getProfile,
} from "../controllers/userController.js";
import { protect,isAdmin } from "../middlewares/authMiddleware.js";

const router = express.Router();
router.get("/profile", protect, getProfile);
router.put("/profile/update", protect, updateProfile);

router.post("/", protect, isAdmin, createUserByAdmin);
router.get("/", protect, isAdmin, getAllUsers);
router.get("/:id", protect, isAdmin, getUserById);
router.put("/:id", protect, isAdmin, updateUser);
router.delete("/:id", protect, isAdmin, deleteUser);





export default router;
