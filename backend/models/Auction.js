import mongoose from "mongoose";

const auctionSchema = new mongoose.Schema({
    name: {type: String},
    description: {type: String},
    images: {type: String},
    adress: {type:String},
    maxprice:{type:Number},
    auctionprice:{type:Number},
    creator: { type: mongoose.Schema.Types.ObjectId, ref: "Users", required: true },
    lastBidder: { type: mongoose.Schema.Types.ObjectId, ref: "Users" }
})

export default mongoose.model("Auction",auctionSchema)