import Auction from "../models/Auction.js";

export const checkAuctionOpen = async (req, res, next) => {
  try {
    const auction = await Auction.findById(req.params.id);
    if (!auction) return res.status(404).json({ message: "Auction not found" });

    if (auction.etat !== "on") {
      return res.status(400).json({ message: "Bidding is closed for this auction" });
    }

    req.auction = auction;
    next();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
