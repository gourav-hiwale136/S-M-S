import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    rollNo: {
      type: String,
      required: true,
      unique: true,
    },
    className: {
      type: String,
      required: true,
    },
    age: Number,
    marks: {
      type: Number,
      default: 0,
    },
  },
  // { timestamps: true }
);

export default mongoose.model("Student", studentSchema);
