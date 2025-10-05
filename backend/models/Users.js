import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    firstname: { type: String },
    lastname: { type: String },
    adress: { type: String },
    phone: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    provider: { type: String, default: "local" },
    googleId: { type: String },
    facebookId: { type: String },
}, { timestamps: true });

export default mongoose.model("Users", userSchema);