import mongoose, { Schema, Document } from "mongoose";

export interface IMedicine extends Document {
  name: string;
  genericName: string;
  manufacturer: string;
  dosage: string;
  quantity: number;
  price: number;
  expiryDate: Date;
  batchNumber: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const medicineSchema = new Schema<IMedicine>(
  {
    name: {
      type: String,
      required: [true, "Medicine name is required"],
    },
    genericName: {
      type: String,
      required: [true, "Generic name is required"],
    },
    manufacturer: {
      type: String,
      required: [true, "Manufacturer is required"],
    },
    dosage: {
      type: String,
      required: [true, "Dosage is required"],
    },
    quantity: {
      type: Number,
      required: [true, "Quantity is required"],
      default: 0,
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
    },
    expiryDate: {
      type: Date,
      required: [true, "Expiry date is required"],
    },
    batchNumber: {
      type: String,
      required: [true, "Batch number is required"],
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model<IMedicine>("Medicine", medicineSchema);
