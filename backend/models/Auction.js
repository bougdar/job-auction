import mongoose from "mongoose";

const auctionSchema = new mongoose.Schema({
    name: { type: String },
    description: { type: String },
    images: { type: String },
    etat: { type: String, default: "on" },
    adress: { type: String },
    maxprice: { type: Number },
    auctionprice: { type: Number },
    creator: { type: mongoose.Schema.Types.ObjectId, ref: "Users", required: true },
    lastBidder: { type: mongoose.Schema.Types.ObjectId, ref: "Users" }
},{ timestamps: true });

export default mongoose.model("Auction", auctionSchema)