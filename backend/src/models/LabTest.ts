import mongoose, { Schema, Document } from "mongoose";

export interface ILabTest extends Document {
  name: string;
  description: string;
  cost: number;
  turnaroundTime: string;
  normalRange: string;
  unit: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const labTestSchema = new Schema<ILabTest>(
  {
    name: {
      type: String,
      required: [true, "Test name is required"],
      unique: true,
    },
    description: {
      type: String,
      default: "",
    },
    cost: {
      type: Number,
      required: [true, "Cost is required"],
    },
    turnaroundTime: {
      type: String,
      required: [true, "Turnaround time is required"],
    },
    normalRange: {
      type: String,
      required: [true, "Normal range is required"],
    },
    unit: {
      type: String,
      required: [true, "Unit is required"],
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model<ILabTest>("LabTest", labTestSchema);
