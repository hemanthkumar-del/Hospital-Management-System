import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  fullName: string;
  email: string;
  password: string;
  phone: string;
  role:
    | "admin"
    | "doctor"
    | "patient"
    | "receptionist"
    | "pharmacist"
    | "lab-technician";
  gender: "male" | "female" | "other";
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new Schema<IUser>(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    role: {
      type: String,
      enum: [
        "admin",
        "doctor",
        "patient",
        "receptionist",
        "pharmacist",
        "lab-technician",
      ],
      default: "patient",
    },
    gender: {
      type: String,
      enum: ["male", "female", "other"],
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model<IUser>("User", userSchema);

export default User;