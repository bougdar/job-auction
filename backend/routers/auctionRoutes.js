import express from "express";
import {
  createAction,
  getAllAction,
  getByIdAction,
  updateAction,
  deletedAction,
  bidInAction,
} from "../controllers/auctionController.js";

const router = express.Router();

router.post("/", createAction);
router.get("/", getAllAction);
router.get("/:id", getByIdAction);
router.put("/:id", updateAction);
router.delete("/:id", deletedAction);
router.post("/bid/:id", bidInAction);

export default router;
