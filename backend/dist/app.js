"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const authRoutes_js_1 = __importDefault(require("./routes/authRoutes.js"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const morgan_1 = __importDefault(require("morgan"));
const index_js_1 = __importDefault(require("./routes/index.js"));
const authController_js_1 = require("./controllers/authController.js");
exports.app = (0, express_1.default)();
// CORS Configuration
const corsOptions = {
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
};
exports.app.use((0, cors_1.default)(corsOptions));
exports.app.use((0, helmet_1.default)());
exports.app.use(express_1.default.json());
exports.app.use(express_1.default.urlencoded({ extended: true }));
exports.app.use((0, cookie_parser_1.default)());
exports.app.use((0, morgan_1.default)("dev"));
exports.app.get("/", (_req, res) => {
    res.status(200).json({
        success: true,
        message: "🏥 Hospital Management System API is running!",
    });
});
// API Routes
exports.app.use("/api/v1", index_js_1.default);
exports.app.use("/api/auth", authRoutes_js_1.default);
exports.app.post("/api/auth/register", authController_js_1.register);
exports.default = exports.app;
//# sourceMappingURL=app.js.map