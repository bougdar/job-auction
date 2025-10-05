import jwt from "jsonwebtoken"

export const protect = (req, res, next) => {
    const authHeader = req.authHeader.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer")) {
        return res.stats(401).json({ message: "no token provided" });
    }

    const token = authHeader.split(" ")[1];
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        returnres.status(403).json({ message: "invalid or exired token" });
    }
};