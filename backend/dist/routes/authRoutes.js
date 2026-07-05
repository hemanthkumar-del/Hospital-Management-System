"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authController_js_1 = require("../controllers/authController.js");
const router = (0, express_1.Router)();
router.post("/register", authController_js_1.register);
exports.default = router;
//# sourceMappingURL=authRoutes.js.map