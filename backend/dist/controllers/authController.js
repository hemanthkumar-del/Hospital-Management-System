"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const User_js_1 = __importDefault(require("../models/User.js"));
const register = async (req, res) => {
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
        const existingUser = await User_js_1.default.findOne({ email: normalizedEmail });
        if (existingUser) {
            res.status(400).json({
                success: false,
                message: "Email already exists",
            });
            return;
        }
        const hashedPassword = await bcrypt_1.default.hash(String(password), 10);
        await User_js_1.default.create({
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
    }
    catch (error) {
        console.error("Register error:", error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};
exports.register = register;
//# sourceMappingURL=authController.js.map