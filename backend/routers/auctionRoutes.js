import express from "express";
import {
  createAction,
  getAllAction,
  getByIdAction,
  updateAction,
  deletedAction,
  bidInAction,
  getActionEtatOn
} from "../controllers/auctionController.js";
import { protect } from "../middlewares/authMiddleware.js";
import { checkAuctionOpen,checkAuctionOwnership } from "../middlewares/auctionMiddleware.js";

const router = express.Router();

router.post("/", protect, createAction);
router.get("/etat/on", protect, getActionEtatOn);
router.get("/", protect, getAllAction);
router.get("/:id", protect, getByIdAction);
router.put("/:id", protect,checkAuctionOwnership, updateAction);
router.delete("/:id", protect,checkAuctionOwnership, deletedAction);
router.post("/bid/:id", protect, checkAuctionOpen, bidInAction);

export default router;
