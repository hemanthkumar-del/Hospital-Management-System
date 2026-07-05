import mongoose, { Schema, Document } from "mongoose";

export interface ILabReport extends Document {
  patientId: mongoose.Types.ObjectId;
  testId: mongoose.Types.ObjectId;
  appointmentId: mongoose.Types.ObjectId;
  value: string;
  status: "pending" | "completed" | "abnormal";
  reportDate: Date;
  notes: string;
  createdAt: Date;
  updatedAt: Date;
}

const labReportSchema = new Schema<ILabReport>(
  {
    patientId: {
      type: Schema.Types.ObjectId,
      ref: "Patient",
      required: [true, "Patient ID is required"],
    },
    testId: {
      type: Schema.Types.ObjectId,
      ref: "LabTest",
      required: [true, "Test ID is required"],
    },
    appointmentId: {
      type: Schema.Types.ObjectId,
      ref: "Appointment",
      required: false,
    },
    value: {
      type: String,
      required: [true, "Test value is required"],
    },
    status: {
      type: String,
      enum: ["pending", "completed", "abnormal"],
      default: "pending",
    },
    reportDate: {
      type: Date,
      default: Date.now,
    },
    notes: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

export default mongoose.model<ILabReport>("LabReport", labReportSchema);
