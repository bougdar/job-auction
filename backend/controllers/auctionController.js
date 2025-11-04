import Auction from "../models/Auction.js";
import cron from "node-cron";

export const createAction = async (req, res) => {
    try {
        const { name, description, images, address, maxprice } = req.body;
        const userId = req.user.id;

        if (!name || !description || !images || !address || !maxprice) 
            return res.status(400).json({ message: "All fields are required" });

        const newAuction = new Auction({ name, description, images, address, maxprice, creator: userId });
        await newAuction.save();
        res.status(201).json(newAuction);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getAllAction = async (req, res) => {
    try {
        const auction = await Auction.find();
        res.status(200).json(auction)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getActionEtatOn = async (req, res) => {
    try {
        const auctions = await Auction.find({ etat: "on" });
        res.status(200).json(auctions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const getByIdAction = async (req, res) => {
    try {
        const auction = await Auction.findById(req.params.id);
        if (!auction) return res.status(404).json({ message: "not found" });
        res.status(200).json(auction);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const updateAction = async (req, res) => {
    try {
        const { name, description, images, address, maxprice, auctionprice } = req.body;
        const auction = req.auction;

        if (name) auction.name = name;
        if (description) auction.description = description;
        if (images) auction.images = images;
        if (address) auction.address = address;
        if (maxprice) auction.maxprice = maxprice;
        if (auctionprice) auction.auctionprice = auctionprice;

        const updatedAuction = await auction.save();
        res.status(200).json({ message: "Auction updated successfully.", auction: updatedAuction });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deletedAction = async (req, res) => {
    try {
        await req.auction.deleteOne();
        res.status(200).json({ message: "Auction deleted successfully." });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const bidInAction = async (req, res) => {
    try {
        const { newBid } = req.body;
        const userId = req.user.id;
        const io = req.app.get("io");

        const auction = req.auction;

        if (newBid >= auction.auctionprice) {
            return res.status(400).json({ message: "Bid must be lower than current price" });
        }

        auction.auctionprice = newBid;
        auction.lastBidder = userId;
        await auction.save();

        io.emit("auctionUpdated", {
            id: auction._id,
            auctionprice: auction.auctionprice,
        });

        res.status(200).json({ message: "Bid placed successfully", auction });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

cron.schedule("0 * * * *", async () => {
    try {
        const now = new Date();
        const expiredAuctions = await Auction.updateMany(
            { etat: "on", createdAt: { $lte: new Date(now - 24 * 60 * 60 * 1000) } },
            { etat: "off" }
        );

        if (expiredAuctions.modifiedCount > 0) {
            console.log(`Auctions updated to 'off': ${expiredAuctions.modifiedCount}`);
        }
    } catch (err) {
        console.error("Error updating auction etat:", err);
    }
});
