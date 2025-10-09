import Auction from "../models/Auction.js";

export const createAction = async (req, res) => {
    try {
        const { name, description, images, adress, maxprice } = req.body;
        if (!name || !description || !images || !adress || !maxprice) return res.status(400).json({ message: "All fields are required" });

        const newAuction = new Auction({ name, description, images, adress, maxprice });
        await newAuction.save();
        res.status(201).json(newAuction);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getAllAction = async (req, res) => {
    try {
        const auction = await Auction.find();
        res.status(200).json(auction)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

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
        const { name, description, images, address, maxprice } = req.body;

        if (!name || !description || !images || !address || !maxprice) {
            return res.status(400).json({ message: "All fields are required." });
        }

        const existingAction = await Auction.findById(req.params.id);
        if (!existingAction) {
            return res.status(404).json({ message: "Action not found." });
        }

        existingAction.name = name;
        existingAction.description = description;
        existingAction.images = images;
        existingAction.address = address;
        existingAction.maxprice = maxprice;

        const updatedAction = await existingAction.save();

        res.status(200).json({
            message: "Action updated successfully.",
            action: updatedAction,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const deletedAction = async (req, res) => {
    try {
        const deletedAction = await Auction.findByIdAndDelete(req.params.id);
        if (!deletedAction)
            return res.status(404).json({ message: "not found" });
        res.status(200).json({ message: "Auction deleted successfully" });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const bidInAction = async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}