import Users from "../models/Users.js";

import bcrypt from "bcryptjs";

export const createUserByAdmin = async (req, res) => {
    try {
        const { firstname, lastname, address, phone, email, password, role } = req.body;
        if (!email || !password || !role) return res.status(400).json({ message: "Email, password, and role required" });

        const existingUser = await Users.findOne({ email });
        if (existingUser) return res.status(400).json({ message: "User already exists" });

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new Users({
            firstname,
            lastname,
            address,
            phone,
            email,
            password: hashedPassword,
            role
        });

        await newUser.save();
        res.status(201).json({ message: "User created successfully", user: newUser });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getAllUsers = async (req, res) => {
    try {
        const users = await Users.find().select("-password");
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getUserById = async (req, res) => {
    try {
        const user = await Users.findById(req.params.id).select("-password");
        if (!user) return res.status(404).json({ message: "User not found" });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const updateUser = async (req, res) => {
    try {
        const { firstname, lastname, address, phone, email, password, role } = req.body;
        const user = await Users.findById(req.params.id);
        if (!user) return res.status(404).json({ message: "User not found" });

        if (firstname) user.firstname = firstname;
        if (lastname) user.lastname = lastname;
        if (address) user.address = address;
        if (phone) user.phone = phone;
        if (email) user.email = email;
        if (role) {
            const validRoles = ["user", "admin"];
            if (!validRoles.includes(role)) {
                return res.status(400).json({ message: `Invalid role. Allowed roles: ${validRoles.join(", ")}` });
            }
            user.role = role;
        }

        if (password) {
            user.password = await bcrypt.hash(password, 10);
        }
        const updatedUser = await user.save();
        const { password: _, ...userWithoutPassword } = updatedUser.toObject();

        res.status(200).json({ message: "User updated successfully", user: userWithoutPassword });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteUser = async (req, res) => {
    try {
        const user = await Users.findById(req.params.id);
        if (!user) return res.status(404).json({ message: "User not found" });

        await user.deleteOne();
        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const updateProfile = async (req, res) => {
  try {
    const user = await Users.findById(req.user.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    const { firstname, lastname, address, phone, email, password } = req.body;

    if (firstname) user.firstname = firstname;
    if (lastname) user.lastname = lastname;
    if (address) user.address = address;
    if (phone) user.phone = phone;
    if (email) user.email = email;
    if (password) user.password = await bcrypt.hash(password, 10);

    const updatedUser = await user.save();
    const { password: _, ...userWithoutPassword } = updatedUser.toObject();

    res.status(200).json({ message: "Profile updated successfully", user: userWithoutPassword });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const getProfile = async (req, res) => {
  try {
    const user = await Users.findById(req.user.id).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
