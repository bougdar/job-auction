import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Users from "../models/Users.js";
import { generateAccessToken, generateRefreshToken } from "../utils/generateTokens.js";

import { OAuth2Client } from "google-auth-library";

// (email/password)
export const register = async (req, res) => {
    try {
        const { firstname, lastname, adress, phone, email, password } = req.body;
        const existing = await Users.findOne({ email });
        if (existing) return res.status(400).json({ message: "user already exists" });

        const hashed = await bcrypt.hash(password, 10);
        const user = await Users.create({ firstname, lastname, adress, phone, email, password: hashed })
        const accessToken = generateAccessToken(user);
        const refreshToken = generateRefreshToken(user);
        res.status(201).json({ user, accessToken, refreshToken });
    }
    catch (error) { res.status(500).json({ message: error.message }) }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await Users.findOne({ email });
        if (!user) return res.status(404).json({ message: "User not found" });

        const valid = await bcrypt.compare(password, user.password);
        if (!valid) return res.status(400).json({ message: "Wrong password" });

        const accessToken = generateAccessToken(user);
        const refreshToken = generateRefreshToken(user);

        res.json({ user, accessToken, refreshToken });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// (refreshToken)
export const refreshToken = (req, res) => {

    const { token } = req.body;

    if (!token) return res.status(401).json({ message: "No token provided" });

    try {
        const decoded = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
        const accessToken = jwt.sign({ id: decoded.id }, process.env.JWT_SECRET, { expiresIn: "15m" });
        res.json({ accessToken });
    } catch (error) {
        res.status(403).json({ message: "Invalid refresh token" });
    }

};

// (google)
const googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export const googleLogin = async (req, res) => {
    try {
        const { token } = req.body;
        const ticket = await googleClient.verifyIdToken({ idToken: token, audience: process.env.GOOGLE_CLIENT_ID });
        const payload = ticket.getPayload();

        let user = await Users.findOne({ email: payload.email });
        if (!user) {
            user = await Users.create({
                firstname: payload.given_name,
                lastname: payload.family_name,
                email: payload.email,
                provider: "google",
                googleId: payload.sub,
            });
        }

        const accessToken = generateAccessToken(user);
        const refreshToken = generateRefreshToken(user);

        res.json({ user, accessToken, refreshToken });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};