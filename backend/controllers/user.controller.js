import User from "../models/user.model.js";
import bcrypt, { hashSync } from "bcryptjs";
import jwt from "jsonwebtoken";

// Register User : /api/user/register
export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ message: "All fields are required", success: false });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json1({ message: "User already exist", success: false });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "7d",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure:
        process.env.NODE_ENV && process.env.NODE_ENV === "production"
          ? true
          : false,
      sameSite: process.env.NODE_ENV ? "none" : "Strict", // helps prevent CSRF attacks
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    res.json({
      message: "User registered Successfully",
      success: true,
      user: {
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
