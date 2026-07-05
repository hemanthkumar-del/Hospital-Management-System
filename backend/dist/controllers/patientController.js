"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePatient = exports.updatePatient = exports.getPatientById = exports.getAllPatients = exports.createPatient = void 0;
const index_js_1 = require("../models/index.js");
const createPatient = async (req, res) => {
    try {
        const patientData = req.body;
        const patient = await index_js_1.Patient.create(patientData);
        res.status(201).json({
            success: true,
            message: "Patient created successfully",
            data: patient,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: error instanceof Error ? error.message : "Error creating patient",
        });
    }
};
exports.createPatient = createPatient;
const getAllPatients = async (_req, res) => {
    try {
        const patients = await index_js_1.Patient.find();
        res.status(200).json({
            success: true,
            message: "Patients retrieved successfully",
            data: patients,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error instanceof Error ? error.message : "Error retrieving patients",
        });
    }
};
exports.getAllPatients = getAllPatients;
const getPatientById = async (req, res) => {
    try {
        const { id } = req.params;
        const patient = await index_js_1.Patient.findById(id);
        if (!patient) {
            return res.status(404).json({
                success: false,
                message: "Patient not found",
            });
        }
        res.status(200).json({
            success: true,
            message: "Patient retrieved successfully",
            data: patient,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error instanceof Error ? error.message : "Error retrieving patient",
        });
    }
};
exports.getPatientById = getPatientById;
const updatePatient = async (req, res) => {
    try {
        const { id } = req.params;
        const patientData = req.body;
        const patient = await index_js_1.Patient.findByIdAndUpdate(id, patientData, {
            new: true,
            runValidators: true,
        });
        if (!patient) {
            return res.status(404).json({
                success: false,
                message: "Patient not found",
            });
        }
        res.status(200).json({
            success: true,
            message: "Patient updated successfully",
            data: patient,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: error instanceof Error ? error.message : "Error updating patient",
        });
    }
};
exports.updatePatient = updatePatient;
const deletePatient = async (req, res) => {
    try {
        const { id } = req.params;
        const patient = await index_js_1.Patient.findByIdAndDelete(id);
        if (!patient) {
            return res.status(404).json({
                success: false,
                message: "Patient not found",
            });
        }
        res.status(200).json({
            success: true,
            message: "Patient deleted successfully",
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error instanceof Error ? error.message : "Error deleting patient",
        });
    }
};
exports.deletePatient = deletePatient;
//# sourceMappingURL=patientController.js.map