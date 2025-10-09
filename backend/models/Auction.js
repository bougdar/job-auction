import mongoose from "mongoose";

const auctionSchema = new mongoose.Schema({
    name: {type: String},
    description: {type: String},
    images: {type: String},
    adress: {type:String},
    maxprice:{type:Number},
    auctionprice:{type:Number}
})

export default mongoose.model("Auction",auctionSchema)