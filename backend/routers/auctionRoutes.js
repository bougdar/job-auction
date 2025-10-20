import express from "express";
import {
  createAction,
  getAllAction,
  getByIdAction,
  updateAction,
  deletedAction,
  bidInAction,
} from "../controllers/auctionController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", protect, createAction);
router.get("/", protect, getAllAction);
router.get("/:id", protect, getByIdAction);
router.put("/:id", protect, updateAction);
router.delete("/:id", protect, deletedAction);
router.post("/bid/:id", protect, bidInAction);

export default router;
