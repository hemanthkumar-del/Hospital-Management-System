"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDoctor = exports.updateDoctor = exports.getDoctorById = exports.getAllDoctors = exports.createDoctor = void 0;
const index_js_1 = require("../models/index.js");
const createDoctor = async (req, res) => {
    try {
        const doctorData = req.body;
        const doctor = await index_js_1.Doctor.create(doctorData);
        res.status(201).json({
            success: true,
            message: "Doctor created successfully",
            data: doctor,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: error instanceof Error ? error.message : "Error creating doctor",
        });
    }
};
exports.createDoctor = createDoctor;
const getAllDoctors = async (_req, res) => {
    try {
        const doctors = await index_js_1.Doctor.find();
        res.status(200).json({
            success: true,
            message: "Doctors retrieved successfully",
            data: doctors,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error instanceof Error ? error.message : "Error retrieving doctors",
        });
    }
};
exports.getAllDoctors = getAllDoctors;
const getDoctorById = async (req, res) => {
    try {
        const { id } = req.params;
        const doctor = await index_js_1.Doctor.findById(id);
        if (!doctor) {
            return res.status(404).json({
                success: false,
                message: "Doctor not found",
            });
        }
        res.status(200).json({
            success: true,
            message: "Doctor retrieved successfully",
            data: doctor,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error instanceof Error ? error.message : "Error retrieving doctor",
        });
    }
};
exports.getDoctorById = getDoctorById;
const updateDoctor = async (req, res) => {
    try {
        const { id } = req.params;
        const doctorData = req.body;
        const doctor = await index_js_1.Doctor.findByIdAndUpdate(id, doctorData, {
            new: true,
            runValidators: true,
        });
        if (!doctor) {
            return res.status(404).json({
                success: false,
                message: "Doctor not found",
            });
        }
        res.status(200).json({
            success: true,
            message: "Doctor updated successfully",
            data: doctor,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: error instanceof Error ? error.message : "Error updating doctor",
        });
    }
};
exports.updateDoctor = updateDoctor;
const deleteDoctor = async (req, res) => {
    try {
        const { id } = req.params;
        const doctor = await index_js_1.Doctor.findByIdAndDelete(id);
        if (!doctor) {
            return res.status(404).json({
                success: false,
                message: "Doctor not found",
            });
        }
        res.status(200).json({
            success: true,
            message: "Doctor deleted successfully",
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error instanceof Error ? error.message : "Error deleting doctor",
        });
    }
};
exports.deleteDoctor = deleteDoctor;
//# sourceMappingURL=doctorController.js.map