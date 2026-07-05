"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateAppointmentStatus = exports.deleteAppointment = exports.updateAppointment = exports.getAppointmentById = exports.getAllAppointments = exports.createAppointment = void 0;
const index_js_1 = require("../models/index.js");
const createAppointment = async (req, res) => {
    try {
        const appointmentData = req.body;
        const appointment = await index_js_1.Appointment.create(appointmentData);
        res.status(201).json({
            success: true,
            message: "Appointment created successfully",
            data: appointment,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: error instanceof Error ? error.message : "Error creating appointment",
        });
    }
};
exports.createAppointment = createAppointment;
const getAllAppointments = async (_req, res) => {
    try {
        const appointments = await index_js_1.Appointment.find()
            .populate("patientId")
            .populate("doctorId");
        res.status(200).json({
            success: true,
            message: "Appointments retrieved successfully",
            data: appointments,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error instanceof Error ? error.message : "Error retrieving appointments",
        });
    }
};
exports.getAllAppointments = getAllAppointments;
const getAppointmentById = async (req, res) => {
    try {
        const { id } = req.params;
        const appointment = await index_js_1.Appointment.findById(id)
            .populate("patientId")
            .populate("doctorId");
        if (!appointment) {
            return res.status(404).json({
                success: false,
                message: "Appointment not found",
            });
        }
        res.status(200).json({
            success: true,
            message: "Appointment retrieved successfully",
            data: appointment,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error instanceof Error ? error.message : "Error retrieving appointment",
        });
    }
};
exports.getAppointmentById = getAppointmentById;
const updateAppointment = async (req, res) => {
    try {
        const { id } = req.params;
        const appointmentData = req.body;
        const appointment = await index_js_1.Appointment.findByIdAndUpdate(id, appointmentData, {
            new: true,
            runValidators: true,
        })
            .populate("patientId")
            .populate("doctorId");
        if (!appointment) {
            return res.status(404).json({
                success: false,
                message: "Appointment not found",
            });
        }
        res.status(200).json({
            success: true,
            message: "Appointment updated successfully",
            data: appointment,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: error instanceof Error ? error.message : "Error updating appointment",
        });
    }
};
exports.updateAppointment = updateAppointment;
const deleteAppointment = async (req, res) => {
    try {
        const { id } = req.params;
        const appointment = await index_js_1.Appointment.findByIdAndDelete(id);
        if (!appointment) {
            return res.status(404).json({
                success: false,
                message: "Appointment not found",
            });
        }
        res.status(200).json({
            success: true,
            message: "Appointment deleted successfully",
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error instanceof Error ? error.message : "Error deleting appointment",
        });
    }
};
exports.deleteAppointment = deleteAppointment;
const updateAppointmentStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        const appointment = await index_js_1.Appointment.findByIdAndUpdate(id, { status }, { new: true, runValidators: true })
            .populate("patientId")
            .populate("doctorId");
        if (!appointment) {
            return res.status(404).json({
                success: false,
                message: "Appointment not found",
            });
        }
        res.status(200).json({
            success: true,
            message: "Appointment status updated successfully",
            data: appointment,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: error instanceof Error ? error.message : "Error updating appointment status",
        });
    }
};
exports.updateAppointmentStatus = updateAppointmentStatus;
//# sourceMappingURL=appointmentController.js.map