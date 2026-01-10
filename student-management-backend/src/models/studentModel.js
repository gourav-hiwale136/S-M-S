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
    phone: String,
  },
  { timestamps: true }
);

const students = mongoose.model("Student", studentSchema);

export default students;
