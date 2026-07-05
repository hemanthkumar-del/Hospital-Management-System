import express from "express";
import * as patientController from "../controllers/patientController.js";
import * as doctorController from "../controllers/doctorController.js";
import * as appointmentController from "../controllers/appointmentController.js";

const router = express.Router();

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

export default router;
