"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const patientController = __importStar(require("../controllers/patientController.js"));
const doctorController = __importStar(require("../controllers/doctorController.js"));
const appointmentController = __importStar(require("../controllers/appointmentController.js"));
const router = express_1.default.Router();
// Health check
router.get("/", (_req, res) => {
    res.status(200).json({
        success: true,
        message: "🏥 Hospital Management System API is running!",
    });
});
// Authentication routes
router.post("/auth/register", (_req, res) => {
    res.status(201).json({
        success: true,
        message: "Register endpoint - Implementation pending",
    });
});
router.post("/auth/login", (_req, res) => {
    res.status(200).json({
        success: true,
        message: "Login endpoint - Implementation pending",
    });
});
router.post("/auth/logout", (_req, res) => {
    res.status(200).json({
        success: true,
        message: "Logout endpoint - Implementation pending",
    });
});
router.get("/auth/profile", (_req, res) => {
    res.status(200).json({
        success: true,
        message: "Get profile endpoint - Implementation pending",
    });
});
// Users routes
router.get("/users", (_req, res) => {
    res.status(200).json({
        success: true,
        data: [],
        message: "Users endpoint - Implementation pending",
    });
});
// Patients routes
router.post("/patients", patientController.createPatient);
router.get("/patients", patientController.getAllPatients);
router.get("/patients/:id", patientController.getPatientById);
router.put("/patients/:id", patientController.updatePatient);
router.delete("/patients/:id", patientController.deletePatient);
// Doctors routes
router.post("/doctors", doctorController.createDoctor);
router.get("/doctors", doctorController.getAllDoctors);
router.get("/doctors/:id", doctorController.getDoctorById);
router.put("/doctors/:id", doctorController.updateDoctor);
router.delete("/doctors/:id", doctorController.deleteDoctor);
// Appointments routes
router.post("/appointments", appointmentController.createAppointment);
router.get("/appointments", appointmentController.getAllAppointments);
router.get("/appointments/:id", appointmentController.getAppointmentById);
router.put("/appointments/:id", appointmentController.updateAppointment);
router.delete("/appointments/:id", appointmentController.deleteAppointment);
router.patch("/appointments/:id/status", appointmentController.updateAppointmentStatus);
exports.default = router;
//# sourceMappingURL=index.js.map