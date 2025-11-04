import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    firstname: { type: String },
    lastname: { type: String },
    address: { type: String },
    phone: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    provider: { type: String, default: "local" },
    googleId: { type: String },
    facebookId: { type: String },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    }
}, { timestamps: true });

export default mongoose.model("Users", userSchema);