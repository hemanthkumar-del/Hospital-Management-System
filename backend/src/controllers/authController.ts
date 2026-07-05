import { Request, Response } from "express";
import bcrypt from "bcrypt";
import User from "../models/User.js";

export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const { fullName, email, password, phone, gender, role } = req.body;

    if (!fullName || !email || !password || !phone || !gender) {
      res.status(400).json({
        success: false,
        message: "Please provide all required fields",
      });
      return;
    }

    const normalizedEmail = String(email).trim().toLowerCase();
    const existingUser = await User.findOne({ email: normalizedEmail });

    if (existingUser) {
      res.status(400).json({
        success: false,
        message: "Email already exists",
      });
      return;
    }

    const hashedPassword = await bcrypt.hash(String(password), 10);

    await User.create({
      fullName: String(fullName).trim(),
      email: normalizedEmail,
      password: hashedPassword,
      phone: String(phone).trim(),
      gender: String(gender).toLowerCase(),
      role: role ? String(role) : "patient",
    });

    res.status(201).json({
      success: true,
      message: "User registered successfully",
    });
  } catch (error) {
    console.error("Register error:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
